pipeline {
    agent { label 'digital-ocean-agent' }
    
    environment {
        RECAPTCHA_KEY = credentials('RECAPTCHA_KEY');
    }

    stages {
 
        stage("Building project") {
            steps {
                echo 'Cloning git'
                sh 'rm blog-app -rf'
                git([url: 'https://github.com/jovanibrasil/blog-app.git', branch: 'master', credentialsId: '9bae9c61-0a29-483c-a07f-47273c351555'])
                echo 'Installing dependencies ...'
                sh 'npm install'
                echo 'Building ...'
                sh 'node --max_old_space_size=640 node_modules/@angular/cli/bin/ng build --configuration=production'
            }
        }

        stage("Test project"){
            steps {
                echo 'Todo'
            }
        }

        stage("Deploy project"){
            steps {
                echo 'deploying the project ...'
                sh 'rm /var/www/blog/*.* -rf'
                sh 'cp ~/workspace/blog-app/dist/blog-app/* /var/www/blog/ -r'
            }
        }

        stage("Remove temporary files"){
            steps {
                echo 'cleaning ...'
                //sh 'rm ~/workspace/blog-app ~/workspace/blog-app@tmp -rf'
            }
        }

    }
    
}
