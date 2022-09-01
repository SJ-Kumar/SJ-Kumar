# import libs
import numpy as np
import cv2
import matplotlib.pyplot as plt

# we have to initilize our classifier
cascade = cv2.CascadeClassifier('C:\10-Practice\DemoProject\numberplatedet\haarcascade_russian_plate_number.xml')

# take an img for detection and named them in my case i named it to data
data = cv2.imread('C:\10-Practice\DemoProject\numberplatedet\car.jpg')

# convert our img to gray 
gray = cv2.cvtColor(data, cv2.COLOR_BGR2GRAY)


# after processing we can convert our img to colored img 
def convertToRGB(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)


# Make a reactangle for detected faces
face_rectangle = cascade.detectMultiScale(gray, 1.1, 5)
print('found', len(face_rectangle))

for (x, y, w, h) in face_rectangle:
    cv2.rectangle(data, (x, y), (x + w, y + h), (145, 60, 255), 5)

# Now show our detected face in matplot and convert our img to RGB
plt.imshow(convertToRGB(data))
plt.imsave('car_detect.png', convertToRGB(data))
plt.waitforbuttonpress()
