import os.path
import random

abc_to_morse = {
    ' ':'||',
    'a':'._',
    'b':'_...',
    'c':'_._.',
    'd':'_..',
    'e':'.',
    'f':'..-.',
    'g':'__.',
    'h':'....',
    'i':'..',
    'j':'.___',
    'k':'_._',
    'l':'._..',
    'm':'__',
    'n':'_.',
    'o':'___',
    'p':'.__.',
    'q':'__._',
    'r':'._.',
    's':'...',
    't':'_',
    'u':'.._',
    'v':'..._',
    'w':'.__',
    'x':'_.._',
    'y':'_.__',
    'z':'__..'
}

def read_wordlist(relative_path):
    with open(relative_path, 'r', encoding='utf-8') as wordlist_file:
        return wordlist_file.read().splitlines()
    return []

def generate_identification_code():
    all_words = read_wordlist('wordlists/all.txt')
    
    abc_words = []
    morse_words = ''
    for i in range(10):
        random_word = random.choice(all_words)
        abc_words.append(random_word)

        morse_word = word_to_morse(random_word)
        morse_words += morse_word
        if i < 9:
            morse_words += abc_to_morse.get(' ')

    print(morse_words)
    print(abc_words)
    return abc_words, morse_words


def letter_to_morse(letter):
    return abc_to_morse.get(letter)

def word_to_morse(word):
    letters = list(word)
    morse_letters = list(map(lambda x: letter_to_morse(x) + '|', letters))
    morse_letters[-1] = morse_letters[-1][:-1] # remove | at the end of the word
    morse_word = ''.join(morse_letters)
    return morse_word

generate_identification_code()