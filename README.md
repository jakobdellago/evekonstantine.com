#Zu beachten bei Migration:

Modification of the PHP configuration
The filesize is globally restricted by PHP thus you have to change the PHP settings to appropriate values to accept bigger files before changing TYPO3 settings. You can change these values directly via php.ini or via a .htaccess file:

Entries for php.ini:
 ;;;;;;;;;;;;;;;;;;;
 ; Resource Limits ;
 ;;;;;;;;;;;;;;;;;;;
 
 max_execution_time = 1000     ; Maximum execution time of each script, in seconds
 max_input_time = 1000 ; Maximum amount of time each script may spend parsing request data
 ; Maximum size of POST data that PHP will accept.
 post_max_size = 100M
 ; Maximum allowed size for uploaded files.
 upload_max_filesize = 100M

 https://wiki.typo3.org/How_to_upload_big_files