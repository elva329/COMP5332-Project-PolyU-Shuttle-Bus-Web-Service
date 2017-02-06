# Demo of the application
1. Admin Login
2. CRUD Timetables
3. Search Timetable

![Aaron Swartz](https://github.com/elva329/MEANStack-PolyUShuttleBusWebService/raw/master/demo%20of%20PolyU%20Shuttle%20Bus%20Project.gif)

4. Export timetable to pdf and download it

![Aaron Swartz](https://github.com/elva329/MEANStack-PolyUShuttleBusWebService/raw/master/Download%20timetable.gif)

# Guideline to start to run the PolyU Shuttle Bus Application.

Note: 

1. Please kindly note that all these implementation were done in Mac OS environment, there may be some differences or unknown issues when running in Windows, please make proper changes when issue occurs.

2. In the package, there is folder called "MongoDB Screenshots" to create MongoDB accordingly as when I tried to export the script, no records exported.

3. To insert the data, you can refer to the folder "route timetables".

--------------------------------------------------------------------------------------

# Prerequisites:

1. Please make sure mongodb is installed on your environment and make configuration accordingly.  You can check below reference links.

   1) Download Mongodb

      Download: https://www.mongodb.org/downloads#production
   
   2) Install Mongodb on Mac OS

   	  https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/

	 (For Windows platform, please check https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

   3) Extract the Mongodb package, rename it to "mongodb" and put it in the "BusApp" folder. 


2. Install Angular Js
	Reference link: https://www.npmjs.com/package/angular	

3. Install Express Server 

   Reference link: http://expressjs.com/starter/installing.html

4. Install Node.js
 https://nodejs.org/en/download/package-manager/


 Server Bring Up Steps:
 1. Open the command prompt window, cd to the "BusApp" folder, then type "node server", if connection is successful, it will display a message saying "Server running on port 3000".

 2. Open the command prompt window, cd to the mongodb folder which you have renamed, then cd to the "bin" folder, in the prompt window, type "./mongod" start the mongodb server.

 3. Open another command prompt window, cd to the mongodb folder which you have renamed, then cd to the "bin" folder, in the prompt window, type "./mongo".

 4. Open your browser, type localhost:3000, the main page of the PolyU Shuttle Bus Service will be displayed.

 Hope you enjoy our service.

 Thank you.
