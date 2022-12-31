// package main

// import (
// 	"fmt"
// 	"strings"
// )

// func lenAndUpper(name string) (length int, uppercase string) {
// 	defer fmt.Println("I'm done")
// 	length = len(name)
// 	uppercase = strings.ToUpper(name)
// 	return
// }

// func main() {
// 	totalLength, up := lenAndUpper(("nico"))
// 	fmt.Println(totalLength, up)
// }

// package main

// import (
// 	"fmt"
// 	"strings"
// )

// func lenAndUpper(name string) (int, string) {
// 	defer fmt.Println("I'm done")
// 	length := len(name)
// 	uppercase := strings.ToUpper(name)
// 	return length, uppercase
// }

// func main() {
// 	totalLength, up := lenAndUpper(("nico"))
// 	fmt.Println(totalLength, up)
// }

// package main

// import "fmt"

// func superAdd(numbers ...int) int {
// 	for index, number := range numbers {
// 		fmt.Println(index, number)
// 	}
// 	return 1
// }

// func main() {
// 	superAdd(1, 2, 3, 4, 5, 6)
// }

// package main

// import "fmt"

// func superAdd(numbers ...int) {
// 	for i := 0; i < len(numbers); i++ {
// 		fmt.Println((numbers[i]))
// 	}
// }

// func main() {
// 	superAdd(1, 2, 3, 4, 5, 6)
// }

// package main

// import "fmt"

// func superAdd(numbers ...int) int {
// 	total := 0
// 	for _, number := range numbers {
// 		total += number
// 	}
// 	return total
// }

// func main() {
// 	total := superAdd(1, 2, 3, 4, 5, 6)
// 	fmt.Println(total)
// }

// package main

// import "fmt"

// func canIDrink(age int) bool {
// 	switch {
// 	case age < 18:
// 		return false
// 	case age == 18:
// 		return true
// 	case age > 18:
// 		return false
// 	}
// 	return false
// }

// func main() {
// 	fmt.Println(canIDrink(10))
// }

// package main

// import "fmt"

// func main() {
// 	a := 2
// 	b := &a
// 	a = 10
// 	fmt.Println(a, *b)
// }

// package main

// import "fmt"

// func main() {
// 	names := []string{"nico", "lynn", "dal"}
// 	names = append(names, "flynn")
// 	fmt.Println(names)
// }

// package main

// import "fmt"

// func main() {
// 	nico := map[string]string{"name": "nico", "age": "12"}
// 	fmt.Println(nico)
// }

// package main

// import "fmt"

// type person struct {
// 	name    string
// 	age     int
// 	favFood []string
// }

// func main() {
// 	favFood := []string{"kimchi", "ramen"}
// 	nico := person{name: "nico", age: 18, favFood: favFood}
// 	fmt.Println(nico)
// }

// package main

// import (
// 	"fmt"

// 	"github.com/beming-dev/learngo/accounts"
// )

// func main() {
// 	account := accounts.NewAccount("nico")
// 	account.Deposit(10)
// 	fmt.Println(account)
// }

package main

import (
	"fmt"

	"github.com/beming-dev/learngo/mydict"
)

func main() {
	dictionary := mydict.Dictionary{}
	baseWord := "hello"
	dictionary.Add(baseWord, "First")
	dictionary.Search(baseWord)
	dictionary.Delete(baseWord)
	word, err := dictionary.Search(baseWord)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(word)
}
