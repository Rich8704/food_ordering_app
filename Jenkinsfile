pipeline {
    agent any

    stages {

        stage('Build App') {
            steps {
                sh 'echo Building application...'
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'echo Building Docker image...'
                sh 'docker build -t food-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'echo Running Docker container...'
                sh 'docker run -d -p 8081:80 food-app'
            }
        }
    }
}
