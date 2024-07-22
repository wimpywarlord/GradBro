from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
import time
import pandas as pd

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

website = 'https://ymgrad.com/account/login/'
path = '/Users/rishabhsingh/Downloads/chromedriver-mac-arm64/chromedriver'

driver = webdriver.Chrome(options=chrome_options, executable_path=path)
driver.get(website)

# Log in
wait_for_username_field = WebDriverWait(driver, 10)
wait_for_username_field.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[1]/div/div/div/input")))
username_field_element = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[1]/div/div/div/input")
username_field_element.send_keys("")

password_field = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/div[2]/div/div/div/input")
password_field.send_keys("")

login_button = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[5]/div/div/div[2]/div/section/div/form/input[1]")
login_button.click()
time.sleep(10)

Decision_tab = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/div/div[3]/div/div/div[1]/div[3]/a")
Decision_tab.click()
time.sleep(100)

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
    
    # Initialize default values for the three fields
    scholarship = ""
    work_experience = ""
    research_paper = ""
    
    # Find all div elements within the relevant section
    info_divs = application.find_elements(By.XPATH, "./div[1]/div[5]/div")
    
    for info_div in info_divs:
        try:
            span = info_div.find_element(By.TAG_NAME, "span")
            # If there's a span without svg or i, it's scholarship
            if not info_div.find_elements(By.TAG_NAME, "svg") and not info_div.find_elements(By.TAG_NAME, "i"):
                scholarship = span.text
            # If there's a span with svg, it's work experience
            elif info_div.find_elements(By.TAG_NAME, "svg"):
                work_experience = span.text
            # If there's a span with i, it's research paper
            elif info_div.find_elements(By.TAG_NAME, "i"):
                research_paper = span.text
        except NoSuchElementException:
            continue
    
    Scholarship.append(scholarship)
    Work_experience_in_month.append(work_experience)
    Research_paper.append(research_paper)
    
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
