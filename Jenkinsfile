pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Rich8704/food_ordering_app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t food-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 food-app'
            }
        }
    }
}
