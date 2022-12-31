package main

import (
	"fmt"
	"time"
)

//main doesnt wait goroutine
func main() {
	c := make(chan string, 0) //create channel

	people := [5]string{"nico", "flynn", "dal", "japanguy", "larry"}
	for _, person := range people {
		go isSexy(person, c)
	}

	// wait until receive result
	for i := 0; i < len(people); i++ {
		fmt.Println(<-c)
	}
}

func isSexy(person string, c chan string) {
	time.Sleep(time.Second * 5)
	c <- person + " is sexy"
}
