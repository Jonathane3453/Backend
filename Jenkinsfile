pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Clonar código') {
      steps {
        checkout scm
      }
    }

    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }

    stage('Empaquetar imagen Docker') {
      steps {
        sh 'docker build -t mi-backend .'
      }
    }

    stage('Despliegue') {
      steps {
        sh '''
          docker stop backend || true
          docker rm backend || true
          docker run -d --name backend -p 3000:3000 mi-backend
        '''
      }
    }
  }
}
