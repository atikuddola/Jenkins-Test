pipeline {
    agent any

    environment {
        IMAGE_NAME = "demo-app"
        CONTAINER_NAME = "demo-app-jenkins"
    }

    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                // Run tests inside a temporary container
                sh 'docker run --rm $IMAGE_NAME npm test'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 4000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }
}
