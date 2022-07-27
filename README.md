This project is divided into 2 parts one django backend server and rect frontend. Project enables user to get revenue details. User can see list of clients. Among those , user can select clients to generate excel report of those clients.

A ) Setup Django Server :

Clone the project .
Go in ‘backend > client_revenue’ folder. You will find backend project.

1. Open this folder in terminal and create virtual environment <br>

```shell
python3 -m venv venv
```

2. Activate the env <br>
```shell
source venv/bin/activate
```

3. To install all required packages , run following command <br>
```shell
pip install -r requirements.txt
```

4. Setup your MySQL DB and replace connection string in settings.py file
If not installed , install mysqlclient package using <br>
```shell
pip install mysqlclient
```

5. To run server type, <br>
```shell
python manage.py runserver
```

6. To make migrations, <br>
```shell
python manage.py makemigrations   
```

7. To apply those migrations, <br>
```shell
python manage.py migrate          
```

8. Create superuser account by <br>
```shell
python manage.py createsuperuser
```

 Enter details.

8. We are good to go.
Run the server, 
open browser and hit 
http://127.0.0.1:8000/ and server is running.

9. Add dummy records using django admin


B ) Frontend React app
Go to ‘frontend>client_revenue’ folder 

1. You will see react app

2. To install all dependancies, run <br>
```shell
npm install
```

3. Then to start the react app run <br>
```shell
npm start
```

Now you can access the project in browser at 3000 port.
