package main

import (
	"errors"
	"sync"
)

// User represents a user entity.
type User struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var (
	users      = make(map[string]User)
	usersMutex = &sync.Mutex{}
)

// CRUD operations

func GetAllUsers() []User {
	usersMutex.Lock()
	defer usersMutex.Unlock()

	var result []User
	for _, user := range users {
		result = append(result, user)
	}
	return result
}

func GetUserByID(id string) (User, error) {
	usersMutex.Lock()
	defer usersMutex.Unlock()

	user, exists := users[id]
	if !exists {
		return User{}, errors.New("user not found")
	}
	return user, nil
}

func AddUserToStore(user User) {
	usersMutex.Lock()
	defer usersMutex.Unlock()

	users[user.ID] = user
}

func UpdateUserByID(id string, updated User) error {
	usersMutex.Lock()
	defer usersMutex.Unlock()

	_, exists := users[id]
	if !exists {
		return errors.New("user not found")
	}
	users[id] = updated
	return nil
}

func DeleteUserByID(id string) error {
	usersMutex.Lock()
	defer usersMutex.Unlock()

	_, exists := users[id]
	if !exists {
		return errors.New("user not found")
	}
	delete(users, id)
	return nil
}
