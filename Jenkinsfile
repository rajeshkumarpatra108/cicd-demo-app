pipeline {
    agent any

    environment {
        IMAGE_NAME = "cicd-demo-app"
        CONTAINER_NAME = "cicd-demo-container"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/rajeshkumarpatra108/cicd-demo-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true

                docker run -d \
                  --name $CONTAINER_NAME \
                  -p 4001:4000 \
                  $IMAGE_NAME
                '''
            }
        }
    }
}
