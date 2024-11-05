import React, { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    // Correct answers for each question
    const correctAnswers = { ans1: 'bee', ans2: 'elephant', ans3: 'giraffe' };

    // Submission handler
    const handleSubmit = () => {
        let score = 0;
        let message = "Better luck next time!";

        // Calculate the score
        if (ans1 === correctAnswers.ans1) score++;
        if (ans2 === correctAnswers.ans2) score++;
        if (ans3 === correctAnswers.ans3) score++;

        // Set message based on score
        if (score === 3) {
            message = "Excellent! You got all answers correct!";
        } else if (score === 2) {
            message = "Good job!";
        } else if (score === 1) {
            message = "Keep trying!";
        } else if (score === 0) {
            message = "None correct. Try again!";
        }

        // Display the message
        ToastAndroid.show(`You got ${score} out of 3 correct. ${message}`, ToastAndroid.SHORT);
    };

    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Animal Quiz</Text>

            {/* Question 1 */}
            <Text>1. What animal is this?</Text>
            <Image
                source={require('./img/bee.jpg')}
                style={{ width: 200, height: 200, marginBottom: 10 }}
            />
            <RNPickerSelect
                onValueChange={(value) => setAns1(value)}
                items={[
                    { label: 'Bee', value: 'bee' },
                    { label: 'Cat', value: 'cat' },
                    { label: 'Dog', value: 'dog' }
                ]}
                placeholder={{ label: "Select an animal", value: null }}
            />

            {/* Question 2 */}
            <Text>2. What animal is this?</Text>
            <Image
                source={require('./img/elephant.jpg')}
                style={{ width: 200, height: 200, marginBottom: 10 }}
            />
            <RNPickerSelect
                onValueChange={(value) => setAns2(value)}
                items={[
                    { label: 'Elephant', value: 'elephant' },
                    { label: 'Rhino', value: 'rhino' },
                    { label: 'Hippo', value: 'hippo' }
                ]}
                placeholder={{ label: "Select an animal", value: null }}
            />

            {/* Question 3 */}
            <Text>3. What animal is this?</Text>
            <Image
                source={require('./img/giraffe.jpg')}
                style={{ width: 200, height: 200, marginBottom: 10 }}
            />
            <RNPickerSelect
                onValueChange={(value) => setAns3(value)}
                items={[
                    { label: 'Giraffe', value: 'giraffe' },
                    { label: 'Horse', value: 'horse' },
                    { label: 'Zebra', value: 'zebra' }
                ]}
                placeholder={{ label: "Select an animal", value: null }}
            />

            {/* Submit Button */}
            <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 20, backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Submit Answers</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyApp;
