pipeline {
    agent any

    stages {

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
                sh 'docker rm -f food-container || true'
                sh 'docker run -d -p 8081:80 --name food-container food-app'
            }
        }
    }
}
