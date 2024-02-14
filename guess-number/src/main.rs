use rand::Rng;
use std::io;

fn main() {
    let rnum: i32 = rand::thread_rng().gen_range(1..101);
    // println!("{}", rnum);
    println!("Guess a number from 1 to 100 (Enter 0 to quit)");

    loop {
        println!("Enter your guess:");
        let mut str = String::new();
        io::stdin()
            .read_line(&mut str)
            .expect("Failed to read line");

        let guess: Result<i32, _> = str.trim().parse();

        match guess {
            Ok(num) => {
                if num == 0 {
                    println!("Quitting the game...");
                    break;
                }

                if num == rnum {
                    println!("Congrats! Your guess is right, the number is {}!", rnum);
                    break;
                }

                if !(1..101).contains(&num) {
                    println!("Enter a valid number");
                    continue;
                }

                if num < rnum {
                    println!("Your guess is too low");
                } else {
                    println!("Your guess is too high");
                }
            }

            Err(_) => {
                println!("Please Enter an Integer!")
            }
        };
    }
}
