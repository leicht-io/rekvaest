# Rekvaest
Yet another HTTP Client made simple with no support issues (uses XMLHttpRequest and Promise).

Supports simple use cases; right now only support for GET (POST and other will be implemented).

Size: ~ 1-2kb gzipped.

### Install

npm install @leicht/rekvaest@0.0.3

### Run Demo
npm run demo

### Usage
import Rekvaest from "Rekvaest";

#### GET
  Rekvaest.get(this.baseUrl + "todos/1").then(response => {
            console.log(response);
        }, rejection => {
            console.log(rejection);
        })
