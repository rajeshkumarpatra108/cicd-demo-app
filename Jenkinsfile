pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/rajeshkumarpatra108/cicd-demo-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
