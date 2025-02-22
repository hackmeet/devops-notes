#!/bin/bash

while true; do
    clear
    echo "Menu Driven Calculator"
    echo "0. Exit"
    echo "1. Addition"
    echo "2. Subtraction"
    echo "3. Multiplication"
    echo "4. Division"

    echo -n "Enter your choice (0-5): "
    read choice

    case $choice in
        1)
            echo -n "Enter first number: "
            read num1
            echo -n "Enter second number: "
            read num2
            result=$(echo "$num1 + $num2" | bc)
            echo "Result: $result"
            ;;
        2)
            echo -n "Enter first number: "
            read num1
            echo -n "Enter second number: "
            read num2
            result=$(echo "$num1 - $num2" | bc)
            echo "Result: $result"
            ;;
        3)
            echo -n "Enter first number: "
            read num1
            echo -n "Enter second number: "
            read num2
            result=$(echo "$num1 * $num2" | bc)
            echo "Result: $result"
            ;;
        4)
            echo -n "Enter numerator: "
            read num1
            echo -n "Enter denominator: "
            read num2
            if [ "$num2" -eq 0 ]; then
                echo "Error: Division by zero is not allowed."
            else
                result=$(echo "scale=2; $num1 / $num2" | bc)
                echo "Result: $result"
            fi
            ;;
        0)
            echo "Exit done .."
            exit 0
            ;;
        *)
            echo "Invalid choice ! "
            ;;
    esac

    echo -n "Press Enter to continue..."
    read input
done
