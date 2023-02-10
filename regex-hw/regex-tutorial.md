# Regex: Matching an Email

Regex for short or regular expression is way to validate certain strings through search patterns. Similar to other methods javascripts has to validate strings like the include method. Regex can be used within functions to help coders check strings that only matches/fulfill their regex. In this file I will be describing and using the regex code snippet known as matching an email.

## Summary

/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

Above is a regex code snippet called matching an email, and in the name the purpose of this regex is to accept email that matches with the accepted criteria. In a regex there are multiple factors that go into creating one. Thus, I will try my best to breakdown this code snippet as well as describe the functionality of every part in this regex. 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors

/'^'([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})'$'/

Anchors are to match certain characters typically in a certain position. In this instance the anchors included are the '^' symbol and the '$' symbol. The purpose of '^' is to match the first character in the string for example the string can include anything in the '[a-z0-9_\.-]' part of the code. The '$' is to match the character at the end of a string.

### Quantifiers

/^([a-z0-9_\.-]'+')@([\da-z\.-]'+')\.([a-z\.]'{2,6}')$/

Quantifiers are used to specify a repeating pattern or sequence. Usually quantifers goes after the pattern thats repeated and says how many times to repeat that pattern. In our case the quantifers included are '+, and {2,6}'. Having '+' means the string must include any of the characters '[a-z0-9_\.-]' 1 or more times. Then the '{2,6}' represents the length of the string. The length of the string after the '.' must be at least 2 characters and less than 6 characters.

### Character Classes

/^('[a-z0-9_\.-]'+)@('[\da-z\.-]'+)\.('[a-z\.]'{2,6})$/

Character classes are components within our regex that tells us what type of chracters to expect. In our example our character classes are confined within brackets '[]'. For regex we have 3 character classes '[a-z0-9_\.-]', '[\da-z\.-]', and '[a-z\.]'. To further explation i'll breakdown the first character classes. The 'a-z' searches for letters 'a-z', '0-9' searches for numbers '0-9', and the string can include special characters '_/.-'.

### Grouping and Capturing

/^'('[a-z0-9_\.-]+')'@'('[\da-z\.-]+')'\.'('[a-z\.]{2,6}')'$/

This matching an email includes grouping instructors. Which purpose is to match certain parts of a string. It allows a regex to breakdown a match into certain parts. As shown above the regex tries to match three parts. Each individual part is seperated by paranthesis '()'. 

### Bracket Expressions

/^('[a-z0-9_\.-]'+)@('[\da-z\.-]'+)\.('[a-z\.]'{2,6})$/

Matches any character in the square brackets. For example [nN] [oO] matches no, nO, No, and NO. gr[ae]y matches both spellings of the word 'grey'; that is, gray and grey.

### Greedy and Lazy Match

This regrex includes greedy matches. Since it includes the + Quantifier, it will match as many times as possible giving back as needed. Another greedy Quantifier used in this regex is {} when matching `{2,6} for the last capture group.

## Author

You can view my projects github: https://github.com/andrewn822
