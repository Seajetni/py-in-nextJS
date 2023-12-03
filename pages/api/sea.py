import speech_recognition as sr
import pyautogui as pg
import time
import os




def perform_action(voice_input):
    if voice_input == 'Define':
        pg.keyDown('k')
        time.sleep(0.2)
        pg.keyUp('k')
    elif voice_input == 'ultimate':
        pg.press('x')
    elif voice_input == 'Yahoo':
        pg.hotkey('q', 'x', 'e')
    elif voice_input == 'backpack':
        pg.press('b')
        time.sleep(5)
        pg.press('b')
    elif voice_input == 'Lilo':
        pg.press('r')
    elif voice_input.lower() == 'exit':
        return True
    return False

def listen_for_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("พูดซะ:")
        audio = recognizer.listen(source)
    
    try:
        voice_input = recognizer.recognize_google(audio)
        print("พูดว่า:", voice_input)
        return voice_input
    except sr.UnknownValueError:
        return None


while True:
    
    voice_input = listen_for_speech()
    if voice_input:
        if perform_action(voice_input):
            print("oky")
            break
