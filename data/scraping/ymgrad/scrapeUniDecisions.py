from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
import time
import pandas as pd
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

website = 'https://ymgrad.com/account/login/'
pathForDriver = '../../chromeDriver/chromedriver'

driver_service = Service(pathForDriver)
driver = webdriver.Chrome(options=chrome_options, service=driver_service)
driver.maximize_window()
driver.get(website)

# Log in
wait_for_username_field = WebDriverWait(driver, 10)
wait_for_username_field.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[1]/div/div/div/input")))
username_field_element = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[1]/div/div/div/input")
username_field_element.send_keys("deviant29")

password_field = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[2]/div/div/div/input")
password_field.send_keys(".#j@Ai5F8QR$Z-h")

login_button = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/input[1]")
login_button.click()
time.sleep(10)

Decision_tab = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/div/div[3]/div/div/div[1]/div[3]/a")
Decision_tab.click()
time.sleep(10)

# Scroll to the bottom of the page until no new content is loaded
scroll_pause_time = 10  # Time to wait before scrolling further
scrolling_time_limit = 600  # Maximum time to scroll in seconds (10 minutes)
start_time = time.time()

last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    loadMoreButton = driver.find_element(By.CLASS_NAME, 'load_more').send_keys(Keys.END)
    action = ActionChains(driver)
    action.move_to_element(loadMoreButton).perform()

    time.sleep(scroll_pause_time)
    new_height = driver.execute_script("return document.body.scrollHeight")
    
    if new_height == last_height:
        print("Reached the bottom of the page or no new content loaded.")
        break
    
    last_height = new_height

    if time.time() - start_time > scrolling_time_limit:
        print("Scrolling time limit reached.")
        break

# Now scrape the data
Status = []
Name = []
Residency = []
Scholarship = []
Work_experience_in_month = []
Research_paper = []
University_name = []
Course = []
Degree = []
Cgpa = []
Gmat = []
Gre = []
Ielts = []
Toefl = []
Applied_date = []
Decision_date = []

all_applications = driver.find_elements(By.CLASS_NAME, "admits_rejects__card_container___")

for application in all_applications:
    try:
        Status.append(application.find_element(By.XPATH, "./div[1]/div[1]/span").text)
    except NoSuchElementException:
        Status.append("")
    
    try:
        Name.append(application.find_element(By.XPATH, "./div[1]/div[4]/div[1]/a/span").text)
    except NoSuchElementException:
        Name.append("")
    
    try:
        Residency.append(application.find_element(By.XPATH, "./div[1]/div[4]/div[1]/div[1]/span[2]").text)
    except NoSuchElementException:
        Residency.append("")
    
    try:
        Scholarship.append(application.find_element(By.XPATH, "./div[1]/div[5]/div[1]/span").text)
    except NoSuchElementException:
        Scholarship.append("")
    
    try:
        Work_experience_in_month.append(application.find_element(By.XPATH, "./div[1]/div[5]/div[2]/span").text)
    except NoSuchElementException:
        Work_experience_in_month.append("")
    
    try:
        Research_paper.append(application.find_element(By.XPATH, "./div[1]/div[5]/div[3]/span").text)
    except NoSuchElementException:
        Research_paper.append("")
    
    try:
        University_name.append(application.find_element(By.XPATH, "./div[1]/div[7]/div/a/div/div/span").text)
    except NoSuchElementException:
        University_name.append("")
    
    try:
        Course.append(application.find_element(By.XPATH, "./div[1]/div[7]/div/span").text)
    except NoSuchElementException:
        Course.append("")
    
    try:
        Degree.append(application.find_element(By.XPATH, "./div[1]/hr").get_attribute('data-content'))
    except NoSuchElementException:
        Degree.append("")
    
    # Initialize score values
    cgpa = ""
    gmat = ""
    gre = ""
    ielts = ""
    toefl = ""
    
    try:
        Scores = application.find_elements(By.CLASS_NAME, "admits_rejects__test_score___")
        for score in Scores:
            try:
                exam_name = score.find_element(By.CLASS_NAME, "admits_rejects__exam_text_style___").text
                exam_score = score.find_element(By.CLASS_NAME, "admits_rejects__margin_left_2___").text
                if exam_name == "CGPA":
                    cgpa = exam_score
                elif exam_name == "GMAT":
                    gmat = exam_score
                elif exam_name == "GRE":
                    gre = exam_score
                elif exam_name == "IELTS":
                    ielts = exam_score
                elif exam_name == "TOEFL":
                    toefl = exam_score
            except NoSuchElementException:
                continue
    except NoSuchElementException:
        pass
    
    Cgpa.append(cgpa)
    Gmat.append(gmat)
    Gre.append(gre)
    Ielts.append(ielts)
    Toefl.append(toefl)
    
    try:
        Applied_date.append(application.find_element(By.XPATH, "./div[2]/div[1]").text)
    except NoSuchElementException:
        Applied_date.append("")
    
    try:
        Decision_date.append(application.find_element(By.XPATH, "./div[2]/div[3]").text)
    except NoSuchElementException:
        Decision_date.append("")

df = pd.DataFrame({'Status': Status, 'Name': Name, 'Residency': Residency, 'Scholarship': Scholarship, 
                   'Work_experience_in_month': Work_experience_in_month, 'Research_paper': Research_paper, 
                   'University_name': University_name, 'Course': Course, 'Degree': Degree, 
                   'Cgpa': Cgpa, 'Gmat': Gmat, 'Gre': Gre, 'Ielts': Ielts, 'Toefl': Toefl,
                   'Applied_date': Applied_date, 'Decision_date': Decision_date})

df.to_csv('ymgrad_data.csv', index=False)

driver.quit()
