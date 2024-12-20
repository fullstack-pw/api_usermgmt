package main

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestCreateUser(t *testing.T) {
	payload := []byte(`{"id":"1","name":"John Doe","email":"john.doe@example.com"}`)
	req, _ := http.NewRequest("POST", "/users", bytes.NewBuffer(payload))
	rr := httptest.NewRecorder()

	handler := http.HandlerFunc(CreateUser)
	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusCreated {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusCreated)
	}
}

func TestGetUsers(t *testing.T) {
	req, _ := http.NewRequest("GET", "/users", nil)
	rr := httptest.NewRecorder()

	handler := http.HandlerFunc(GetUsers)
	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}
}
