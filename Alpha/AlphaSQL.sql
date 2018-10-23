DECLARE @USERACT TABLE(Id INT, UserId INT, Timestamp DATETIME, Action VARCHAR(100));
DECLARE @USERLOG TABLE(Id INT, FirstName VARCHAR(100), LastName VARCHAR(100));
--
INSERT INTO @USERACT SELECT 1,1,'2018-08-23 01:30','LoggedIn'
INSERT INTO @USERACT SELECT 2,2,'2018-08-23 01:35','LoggedIn'
INSERT INTO @USERACT SELECT 3,3,'2018-08-23 01:40','LoggedIn'
INSERT INTO @USERACT SELECT 4,1,'2018-08-23 01:45','Clicked'
INSERT INTO @USERACT SELECT 5,2,'2018-08-23 01:55','LoggedOut'
INSERT INTO @USERACT SELECT 6,3,'2018-08-23 01:57','LoggedOut'
INSERT INTO @USERACT SELECT 7,1,'2018-08-23 02:10','LoggedOut'
--
INSERT INTO @USERLOG SELECT 1,'Jack','Frost'
INSERT INTO @USERLOG SELECT 2,'Jim','Bean'
INSERT INTO @USERLOG SELECT 3,'Albert','Einstein'

/*  
Report output of activity the user has done for each activity, 
displaying the time (in minutes) from that activity to the next,
Using a pivot table here. 
*/
SELECT 
PTABLE.UserId,
CASE 
	WHEN DATEDIFF(minute,MAX(PTABLE.LoggedIn),MAX(PTABLE.Clicked)) IS NOT NULL AND (MAX(PTABLE.Clicked) > MAX(PTABLE.LoggedIn))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.LoggedIn),MAX(PTABLE.Clicked)))
	WHEN DATEDIFF(minute,MAX(PTABLE.LoggedIn),MAX(PTABLE.LoggedOut)) IS NOT NULL AND (MAX(PTABLE.LoggedOut) > MAX(PTABLE.LoggedIn))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.LoggedIn),MAX(PTABLE.LoggedOut)))		
	ELSE NULL
END [LoggedIn],
CASE 
	WHEN DATEDIFF(minute,MAX(PTABLE.Clicked),MAX(PTABLE.LoggedIn)) IS NOT NULL AND (MAX(PTABLE.LoggedIn) > MAX(PTABLE.Clicked))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.Clicked),MAX(PTABLE.LoggedIn)))
	WHEN DATEDIFF(minute,MAX(PTABLE.Clicked),MAX(PTABLE.LoggedOut)) IS NOT NULL AND (MAX(PTABLE.LoggedOut) > MAX(PTABLE.Clicked))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.Clicked),MAX(PTABLE.LoggedOut)))
	ELSE NULL
END [Clicked],
CASE 
	WHEN DATEDIFF(minute,MAX(PTABLE.LoggedOut),MAX(PTABLE.Clicked)) IS NOT NULL AND (MAX(PTABLE.Clicked) > MAX(PTABLE.LoggedOut))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.LoggedOut),MAX(PTABLE.Clicked)))
	WHEN DATEDIFF(minute,MAX(PTABLE.LoggedOut),MAX(PTABLE.LoggedIn)) IS NOT NULL AND (MAX(PTABLE.LoggedIn) > MAX(PTABLE.LoggedOut))
		THEN ABS(DATEDIFF(minute,MAX(PTABLE.LoggedOut),MAX(PTABLE.LoggedIn)))
	ELSE NULL
END [LoggedOut]
FROM @USERACT
PIVOT (
MAX(Timestamp)
FOR Action in ([LoggedIn],[Clicked],[LoggedOut])
) AS PTABLE
GROUP BY PTABLE.UserId

/*  
Report output of the user's name and date when they were on our website
*/
SELECT LASTLOG.UserId, FirstName + ' ' + LastName [Name], LASTLOG.LastSeen 
FROM @USERLOG [UserLog]
LEFT JOIN 
(
	SELECT UserId, CAST(MAX(TimeStamp) AS DATE) [LastSeen] 
	FROM @USERACT
	WHERE Action = 'LoggedIn'
	GROUP BY UserId
) as LASTLOG
ON [UserLog].Id = LASTLOG.UserId

