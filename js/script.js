const presetCards = [
 
  [9,28,38,52,64,4,16,40,53,71,2,19,'*',56,63,6,23,33,55,70,1,27,42,57,75],
  [4,17,40,52,69,11,24,35,54,61,14,22,'*',55,70,15,28,41,53,73,13,16,43,60,67],
  [4,24,31,49,71,7,18,35,54,65,8,28,'*',51,66,1,29,36,53,75,5,26,40,59,61],
  [8,26,31,48,66,10,24,36,59,61,5,29,'*',54,65,2,30,44,50,72,14,21,43,46,67],
  [3,21,39,48,64,6,16,41,53,74,2,23,'*',51,67,10,27,42,50,73,14,26,33,60,70],
  [13,21,43,50,67,8,18,42,55,68,15,28,'*',48,63,9,16,45,49,64,4,20,35,56,70],
  [14,19,39,48,64,10,23,32,55,74,1,29,'*',49,61,3,22,45,60,72,15,21,43,54,63],
  [2,16,43,48,65,12,28,40,56,70,4,17,'*',50,75,5,20,36,47,74,9,21,44,60,62],
  [1,29,37,54,64,13,19,44,47,70,6,18,'*',56,61,5,21,39,55,68,8,23,35,52,75],
  [15,24,42,51,73,14,23,38,54,61,11,28,'*',55,71,4,26,33,53,66,8,21,39,59,63],
  [7,24,36,49,73,6,19,35,56,75,13,30,'*',48,72,3,23,31,51,67,8,26,45,59,62],
  [9,28,43,56,75,14,24,33,54,64,15,22,'*',48,73,1,23,32,46,63,4,17,40,58,61],
  [4,16,41,49,66,12,29,45,55,69,8,27,'*',56,73,2,25,40,57,63,5,26,38,54,62],
  [6,30,45,59,71,5,24,43,54,67,14,16,'*',56,62,11,29,35,46,74,3,23,32,57,70],
  [2,27,33,46,74,5,21,38,58,70,9,20,'*',50,61,14,24,40,51,66,10,19,44,49,73],
  [14,16,41,60,71,15,19,37,58,68,5,24,'*',46,65,11,30,31,50,67,4,29,44,53,69],
  [7,18,33,56,72,13,29,36,57,69,5,16,'*',55,64,3,24,38,59,62,15,28,42,51,66],
  [12,29,41,46,71,1,18,37,57,70,6,19,'*',51,72,7,24,43,50,75,11,23,36,55,69],
  [8,24,32,46,71,3,25,43,47,63,10,28,'*',59,74,4,27,41,58,70,14,17,40,55,65],
  [7,27,31,60,74,14,29,39,54,72,8,23,'*',59,69,15,30,32,49,73,11,25,44,50,63],
  [4,28,43,57,69,13,24,44,48,62,3,20,'*',46,65,12,21,34,52,64,7,25,45,59,66],
  [2,16,45,50,64,5,19,33,60,72,3,22,'*',47,74,1,26,44,54,63,12,18,36,48,68],
  [5,20,38,57,61,1,21,43,47,63,14,27,'*',49,64,4,24,44,48,68,8,30,32,56,66],
  [12,16,33,56,64,6,26,45,50,73,11,24,'*',46,71,2,23,40,51,67,4,17,43,47,63],
  [9,27,31,52,73,10,22,34,47,66,7,20,'*',49,70,8,16,33,48,71,3,17,43,50,74],
  [5,20,42,49,70,2,18,37,51,65,14,27,'*',58,72,12,26,34,50,64,1,22,45,52,67],
  [6,30,37,58,69,14,19,35,57,75,12,25,'*',59,65,5,17,34,53,66,13,28,38,52,74],
  [9,22,32,55,67,7,27,33,53,71,2,28,'*',51,68,10,24,40,49,64,3,19,38,54,63],
  [14,21,45,60,75,15,19,41,54,71,2,23,'*',58,69,9,29,37,52,65,7,28,34,55,74],
  [6,26,41,57,67,4,24,38,50,62,12,19,'*',60,63,13,20,43,53,65,14,27,33,46,71],
  [8,17,33,51,62,11,26,31,53,67,10,19,'*',57,72,14,24,35,48,66,1,30,39,56,75],
  [2,30,43,57,69,10,23,35,52,73,3,27,'*',59,62,5,24,32,50,70,8,20,34,47,61],
  [10,24,40,57,73,5,28,45,47,70,15,19,'*',59,61,9,29,39,56,68,4,26,33,54,72],
  [4,23,45,47,69,6,25,31,48,73,7,26,'*',59,62,1,20,35,49,74,15,17,40,51,64],
  [6,21,36,56,64,10,28,42,58,73,14,18,'*',55,68,8,29,37,48,72,3,22,32,46,71],
  [6,23,39,53,68,13,17,40,60,70,5,29,'*',59,66,15,24,33,56,69,8,27,44,49,71],
  [14,18,43,53,63,12,21,42,47,72,13,25,'*',55,67,9,30,33,56,65,4,23,34,46,69],
  [13,28,40,51,61,15,19,36,60,64,11,26,'*',58,67,1,30,45,50,62,9,27,31,56,69],
  [9,29,31,51,73,6,19,45,52,71,2,27,'*',59,75,13,24,32,53,70,11,25,42,48,68],
  [9,17,39,46,74,2,21,34,57,69,14,23,'*',53,68,11,30,35,58,61,13,26,42,54,67],
  [12,25,41,48,67,6,19,39,47,69,2,20,'*',57,75,14,16,31,46,63,8,29,33,49,68],
  [4,22,33,53,74,14,27,32,58,72,1,30,'*',56,65,12,19,35,51,71,15,17,43,50,66],
  [5,21,31,53,61,9,17,40,47,69,10,22,'*',46,63,12,16,32,52,68,3,28,41,56,75],
  [12,19,33,53,68,15,26,41,46,71,10,23,'*',58,69,9,18,31,49,64,8,27,44,50,66],
  [15,23,41,56,68,1,27,43,53,75,11,16,'*',60,62,9,18,44,50,72,13,22,34,46,67],
  [13,23,44,57,71,1,30,38,59,65,3,16,'*',51,70,2,29,37,46,74,9,24,35,47,62],
  [4,26,35,46,69,8,20,41,48,62,3,24,'*',50,68,2,30,43,51,74,6,16,39,57,73],
  [14,17,36,51,73,3,24,45,56,72,13,19,'*',50,62,5,26,39,60,66,9,23,40,47,75],
  [15,23,35,54,71,10,18,34,55,66,11,17,'*',50,73,8,26,36,59,72,9,19,42,60,62],
  [9,20,33,49,64,5,25,35,56,63,8,30,'*',51,61,12,17,36,46,65,4,26,41,54,75],
  [15,20,39,59,73,12,24,43,46,74,14,26,'*',56,64,4,18,40,54,68,9,25,33,58,69],
  [7,25,38,59,73,2,18,33,58,66,8,23,'*',50,70,3,16,36,54,67,14,22,32,48,75],
  [5,24,42,51,70,11,21,43,52,74,3,25,'*',59,61,4,29,45,56,68,1,20,37,53,75],
  [8,17,38,60,63,2,27,31,47,66,6,20,'*',53,75,7,25,37,58,70,12,21,34,57,73],
  [10,19,32,58,71,4,29,40,51,73,14,24,'*',50,67,15,18,39,46,72,5,25,37,47,64],
  [3,30,31,53,67,9,22,34,50,69,10,20,'*',59,72,13,23,41,56,73,1,29,37,60,61],
  [7,25,34,54,65,9,18,31,58,68,8,24,'*',48,72,12,19,40,55,61,3,28,43,46,67],
  [11,29,43,47,67,6,18,31,57,72,8,22,'*',49,65,1,16,41,48,69,13,20,37,55,75],
  [10,19,35,55,73,11,24,39,49,71,9,25,'*',60,70,15,22,45,46,61,12,16,41,51,62],
  [6,29,41,58,68,5,25,43,52,71,12,26,'*',49,72,11,22,45,56,65,4,24,35,51,70],
  [7,28,34,55,67,6,23,39,54,61,13,22,'*',50,71,3,26,32,58,69,9,21,44,51,65],
  [5,25,31,55,74,4,29,32,49,62,15,22,'*',52,71,8,16,33,47,61,14,23,38,57,67],
  [13,19,36,51,67,14,20,31,59,70,15,22,'*',58,61,4,16,32,56,63,7,18,37,54,68],
  [3,19,44,60,74,13,20,36,57,67,4,21,'*',58,71,11,25,34,52,62,9,26,38,50,73],
  [13,19,35,47,70,2,27,40,53,75,1,28,'*',60,63,5,24,32,56,61,15,16,43,46,74],
  [12,26,43,47,68,10,18,44,60,73,9,27,'*',53,72,8,25,32,55,67,14,17,38,59,75],
  [5,19,38,56,67,12,18,45,52,68,6,17,'*',50,71,4,25,37,46,63,3,29,34,47,70],
  [4,26,32,52,75,10,25,36,57,67,6,17,'*',54,74,1,19,45,60,68,5,20,31,51,63],
  [13,28,44,60,75,11,22,41,55,73,6,26,'*',53,74,2,16,35,47,68,10,25,42,49,72],
  [6,23,43,53,70,10,21,45,60,65,2,27,'*',57,71,12,22,39,52,72,1,16,37,46,68],
  [12,18,42,57,67,13,28,40,48,62,2,29,'*',49,66,14,17,41,51,75,5,27,33,53,69],
  [6,27,35,46,70,11,16,41,51,69,15,23,'*',54,64,14,21,39,48,68,3,26,32,58,61],
  [14,25,43,46,63,6,16,37,54,62,5,27,'*',58,74,7,23,31,51,73,8,21,40,48,72],
  [4,18,34,58,74,14,26,35,59,63,3,23,'*',51,61,2,22,39,52,65,10,21,42,57,67],
  [13,25,40,56,62,5,24,37,47,75,15,28,'*',60,73,6,29,45,46,65,12,16,32,48,68],
  [9,20,32,59,61,7,16,44,56,69,1,18,'*',51,72,10,29,35,49,66,15,26,41,57,65],
  [2,28,38,55,65,4,20,44,58,70,9,18,'*',49,69,1,24,36,59,72,12,29,42,51,64],
  [11,25,33,58,68,8,27,32,55,66,10,29,'*',60,62,13,16,31,56,74,4,30,43,53,65],
  [9,19,32,49,64,4,20,45,59,72,14,29,'*',58,67,12,17,41,55,65,3,24,35,60,75],
  [12,24,34,46,63,11,19,44,51,71,8,22,'*',49,70,4,26,42,50,67,7,18,38,59,75],
  [3,19,34,48,66,9,29,32,51,74,4,25,'*',55,64,14,28,44,50,72,12,18,42,53,75],
  [13,30,34,58,70,7,21,40,49,75,15,22,'*',47,63,10,18,41,51,67,3,25,42,50,66],
  [9,17,45,52,66,4,24,42,48,68,1,21,'*',46,74,8,23,35,59,64,3,18,37,47,63],
  [8,25,42,59,66,3,24,38,49,69,10,17,'*',46,65,1,16,35,52,61,12,23,40,55,63],
  [3,22,42,53,75,14,18,35,49,69,10,23,'*',60,63,8,24,44,58,70,6,29,41,50,73],
  [11,19,33,60,74,9,23,44,53,61,15,22,'*',47,63,8,18,31,57,70,6,20,34,59,75],
  [2,24,36,46,64,10,30,31,49,67,5,20,'*',51,74,3,22,44,58,62,7,29,32,47,65],
  [9,16,38,60,72,3,24,36,58,66,4,30,'*',59,68,7,28,39,54,71,14,18,35,52,61],
  [15,21,37,52,67,7,29,39,56,69,12,26,'*',49,73,1,30,32,46,72,9,22,33,54,62],
  [4,19,39,58,67,11,28,33,60,72,13,30,'*',47,74,8,24,38,59,71,14,17,36,49,66],
  [2,28,38,46,70,4,22,33,60,65,11,27,'*',59,69,15,21,35,58,71,13,16,31,52,63],
  [11,30,36,47,71,6,19,35,51,75,4,29,'*',48,68,13,20,39,59,66,14,28,32,57,70],
  [11,21,33,55,62,8,18,37,57,68,1,19,'*',53,65,3,26,38,60,61,7,25,39,59,63],
  [2,22,38,47,62,4,29,43,51,65,13,20,'*',50,61,6,18,45,49,63,12,27,40,48,69],
  [10,25,35,48,74,9,30,40,50,73,3,27,'*',56,75,1,19,37,49,62,4,23,44,53,67],
  [15,19,42,46,74,1,28,33,50,67,13,18,'*',54,75,9,22,31,57,73,5,24,36,48,71],
  [8,28,33,59,65,5,29,31,46,71,12,22,'*',57,62,11,24,39,48,73,2,30,42,51,72],
  [13,20,37,57,69,6,19,34,51,75,7,21,'*',60,73,4,30,39,55,68,14,26,31,54,71],
  [15,29,33,47,61,2,28,41,53,67,1,21,'*',55,64,10,27,40,58,71,13,16,32,54,66],
  [7,29,43,57,62,8,20,40,59,65,5,30,'*',53,64,9,18,37,52,66,6,25,44,56,61],
  [12,30,35,47,68,15,28,37,48,65,14,24,'*',55,66,9,25,36,50,73,5,17,34,56,63],
  [14,18,35,48,66,9,26,42,56,67,15,24,'*',58,72,1,30,36,57,75,5,16,40,49,63],
  [7,30,44,59,65,5,26,35,58,68,15,24,'*',56,73,11,16,34,53,75,10,20,33,50,63],
  [12,20,43,51,67,2,23,35,49,64,3,19,'*',59,63,10,30,37,54,69,1,27,44,47,75],
  [12,23,33,58,62,15,21,34,54,74,7,28,'*',46,71,6,27,35,60,61,1,26,41,55,75],
  [4,18,34,60,72,13,26,45,56,64,8,28,'*',49,71,2,17,32,54,65,10,20,37,58,74],
  [1,17,41,46,72,11,18,38,48,63,9,27,'*',52,73,4,30,39,55,75,13,29,33,54,62],
  [8,20,32,55,69,12,23,31,48,65,13,29,'*',59,61,10,26,42,54,71,4,17,45,50,75],
  [14,18,38,54,70,1,25,41,60,71,7,26,'*',52,63,15,27,44,49,75,3,24,34,55,68],
  [15,26,44,49,63,2,21,38,48,74,11,30,'*',51,68,5,25,36,53,75,7,16,40,56,72],
  [1,23,44,59,75,13,20,36,55,69,2,24,'*',50,73,8,19,35,49,66,10,22,42,56,71],
  [12,16,35,58,73,8,23,38,54,66,3,24,'*',51,70,1,20,33,46,74,7,25,39,48,71],
  [7,20,39,59,72,13,24,44,53,70,5,21,'*',47,74,11,30,41,46,73,6,28,42,54,68],
  [7,27,40,58,61,3,17,38,57,73,9,16,'*',60,62,10,20,35,56,68,2,26,43,59,63],
  [15,24,37,56,73,13,29,41,47,72,3,30,'*',54,66,11,21,32,46,65,9,22,39,48,68],
  [12,25,42,47,72,8,19,36,57,64,1,16,'*',52,62,2,28,37,60,68,4,26,35,55,74],
  [2,19,36,54,73,7,23,39,47,63,12,16,'*',56,69,11,25,35,57,66,3,17,42,58,72],
  [11,30,32,57,74,7,27,45,51,73,13,18,'*',54,61,4,25,39,53,71,8,21,35,47,62],
  [11,18,31,49,72,13,27,35,55,62,10,19,'*',58,75,12,29,43,56,66,14,23,42,60,73],
  [8,24,44,52,70,11,27,34,49,64,14,19,'*',58,62,10,29,45,55,73,2,28,32,57,66],
  [13,17,31,51,61,5,26,45,46,74,12,18,'*',48,68,14,23,34,54,67,9,16,32,58,71],
  [14,17,44,51,66,4,16,43,57,64,8,26,'*',55,71,12,28,32,46,63,9,21,42,50,62],
  [3,27,42,54,67,11,21,32,56,73,13,24,'*',51,61,15,19,35,48,68,12,23,37,57,69],
  [4,17,38,48,70,13,29,43,58,64,9,20,'*',59,72,1,22,40,54,74,11,25,32,46,73],
  [14,28,33,52,72,11,25,40,51,68,1,16,'*',57,67,12,20,38,53,74,3,18,35,47,64],
  [2,18,34,51,61,1,26,32,50,74,5,30,'*',52,72,3,17,44,54,70,15,21,40,59,75],
  [11,18,43,55,68,14,26,44,48,74,9,21,'*',47,71,12,23,32,60,64,1,24,38,51,66],
  [15,18,33,46,65,10,24,34,48,68,1,29,'*',57,70,12,21,36,60,63,2,23,44,55,66],
  [4,19,45,52,64,1,18,40,58,74,12,22,'*',60,71,6,16,31,47,62,9,28,36,56,69],
  [4,21,37,55,70,10,18,39,58,65,3,26,'*',47,73,14,23,42,53,67,5,27,43,50,64],
  [1,22,44,53,70,15,28,38,54,65,12,19,'*',59,61,10,21,43,47,73,2,29,31,46,64],
  [9,27,39,46,63,5,20,41,56,71,4,22,'*',60,64,8,26,38,48,65,1,16,37,51,75],
  [2,22,41,52,69,5,27,31,46,72,8,29,'*',56,62,4,28,33,58,73,7,23,45,48,61],
  [13,22,35,56,61,15,28,39,49,62,12,27,'*',57,67,3,20,45,47,70,4,17,31,48,65],
  [12,20,42,58,74,3,26,33,50,68,6,23,'*',48,69,2,18,35,60,67,7,16,31,59,72],
  [6,24,31,55,62,7,23,40,47,70,8,19,'*',49,64,15,22,41,52,63,2,20,33,46,69],
  [4,30,41,53,69,12,22,43,57,74,5,24,'*',48,67,3,18,42,50,66,2,26,38,55,68],
  [6,28,37,53,72,10,22,42,49,74,2,30,'*',52,62,9,21,39,59,66,15,16,36,48,69],
  [5,26,33,48,66,10,24,44,47,61,7,16,'*',60,68,9,18,37,56,75,4,25,31,55,72],
  [9,21,33,51,62,7,25,38,53,68,2,26,'*',49,64,14,22,34,46,75,10,29,45,55,72],
  [12,26,37,56,69,6,22,33,58,67,10,21,'*',49,72,2,16,40,51,66,8,25,39,46,65],
  [3,30,32,57,64,6,17,35,47,66,5,23,'*',46,63,9,19,39,56,68,8,18,33,59,71],
  [12,22,37,57,71,15,17,43,49,68,8,21,'*',51,62,4,26,35,53,75,10,19,44,55,69],
  [11,16,45,55,68,7,28,32,57,74,10,22,'*',59,71,12,24,40,56,63,13,18,34,60,64],
  [10,17,35,51,66,7,24,36,54,71,12,26,'*',60,64,3,20,41,47,73,5,30,40,50,74],
  [4,20,38,60,73,10,23,39,50,67,8,17,'*',54,61,12,28,42,49,75,6,19,32,47,64],
  [12,29,34,47,74,5,27,40,46,75,7,28,'*',53,70,3,19,37,52,73,13,18,38,57,64],
  [7,28,44,50,66,6,24,42,54,68,5,20,'*',57,63,1,22,39,58,74,4,25,36,48,64],
  [14,20,45,54,65,2,28,41,47,62,9,17,'*',46,70,3,25,35,59,74,8,30,32,58,69],
  [4,28,31,56,68,1,20,39,58,75,12,25,'*',60,63,11,22,35,55,62,9,17,33,48,65],
  [9,25,42,50,67,15,29,32,58,62,5,18,'*',48,70,3,17,40,47,64,6,28,35,49,73],
  [13,28,42,51,74,7,17,44,49,70,5,18,'*',60,61,2,19,41,57,63,9,20,45,53,75],
  [6,24,32,51,70,15,19,36,57,66,8,23,'*',55,65,4,18,44,58,72,12,30,33,53,71],
  [1,30,42,49,71,8,20,37,57,61,11,23,'*',55,63,14,25,45,58,62,12,26,32,53,75],
  [3,25,43,47,75,2,23,42,55,69,15,28,'*',52,64,13,29,31,58,70,6,26,36,48,62],
  [1,25,45,49,66,14,27,34,58,71,8,26,'*',56,70,6,21,33,50,72,7,28,35,53,62],
  [2,16,42,58,73,15,18,43,52,63,7,29,'*',59,66,10,19,31,57,75,5,25,32,49,72],
  [12,22,42,53,74,4,30,43,54,65,11,24,'*',49,70,1,16,39,47,67,15,17,41,55,66],
  [6,26,37,50,61,4,20,32,54,64,11,17,'*',51,66,3,30,44,59,70,10,16,33,52,72],
  [3,24,40,57,73,8,16,37,54,63,13,27,'*',60,68,5,28,38,51,66,15,23,45,49,74],
  [7,24,38,58,69,4,19,43,55,64,10,20,'*',53,63,8,27,40,51,67,12,25,36,48,74],
  [15,30,34,56,73,1,28,33,51,63,14,29,'*',53,62,11,27,44,46,61,7,23,31,47,66],
  [12,18,42,56,68,13,16,39,51,69,4,24,'*',55,71,10,30,40,57,61,6,21,33,46,62],
  [14,20,33,60,67,9,26,35,56,72,3,23,'*',58,75,13,22,45,59,70,11,28,43,48,65],
  [5,22,35,52,75,14,26,36,54,63,12,20,'*',55,71,13,28,40,58,66,9,19,43,60,65],
  [3,22,34,46,64,14,29,41,52,62,8,20,'*',57,72,11,16,39,56,69,7,28,35,53,73],
  [4,18,39,49,61,12,16,34,50,72,2,29,'*',59,68,13,19,32,54,62,11,27,31,48,75],
  [12,16,40,56,63,10,21,41,53,65,15,24,'*',46,64,14,19,32,60,70,1,25,35,51,74],
  [6,17,38,50,74,12,20,32,59,72,13,18,'*',48,66,3,27,40,55,69,9,16,44,58,70],
  [6,25,43,56,75,5,26,34,55,74,2,20,'*',47,73,1,29,33,46,68,14,17,42,60,66],
  [5,17,45,52,67,3,16,39,57,69,10,23,'*',54,70,15,24,35,53,74,12,27,41,59,68]
  ];

// Get the current page URL
const urlObj = new URL(window.location.href);

// Extract parameters with default values
const dbId = urlObj.searchParams.get('chat_id') || '832830524';
const playType = 'play' + (urlObj.searchParams.get('play') || '10');

console.log("You are " + dbId);


let selectedCardNumber = 0;
let currentSelectedCell = null;
let recentCalls = [];
let winningNumbers = [];
let lastCalledCellNumber = null;
let lastCalledCellId = null; // To store the ID of the last called cell
let playerId = null;
let roomNumber = 0;
// let dbId = '832830524';
// const playType = "play50";
let activeGames = 0;
let myRoomHasStartedBeforeIGoIn = false;



const startButton = document.getElementById("start-button");
const cardSelectionScreen = document.getElementById("card-selection-screen");
const gamePlayScreen = document.getElementById("game-play-screen");

gamePlayScreen.style.display = "none";

const showDisqualificationButton = document.getElementById("show-disqualification");
// const showGameOverButton = document.getElementById("show-game-over");

const disqualificationModal = document.getElementById("disqualification-modal");
const gameEndModal = document.getElementById("game-end-modal");
const gameOverModal = document.getElementById("game-over-modal");


const socket = new WebSocket('ws://172.20.10.11:8080'); // Change to your server's WebSocket URL

document.getElementById("stake-value").innerHTML = parseInt(playType.slice(4));

socket.onopen = () => {
  console.log('Connected to the server');
  document.getElementById("bet-value").innerText = parseInt(playType.slice(4));
  
  joinRoom(playType, roomNumber, dbId);
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('Message from server:', message);

  if(message.type === 'roomsStateChange'){
    document.getElementById("active-game-value").innerHTML = message.activeGames;
    activeGames = message.activeGames;

    if(activeGames < 2){
      //change the color of the start button to indicate there is a room
      // showToast('There is a free room now, select your card and start playing.');
      return;
    }
  }


  if(message.type === 'initData'){

    playerId = message.playerId;
    roomNumber = message.roomNumber;
    message.alreadySelectedCards.forEach(number => {
      selectCell(number, 'other'); // Mark these numbers as selected by other players
    });
  }

  if(message.type === 'cardSelectedByOtherUser'){
    // console.log('Message from server:', message.selectedCardNumber);
    selectCell(message.selectedCardNumber, "other");
  }

  // if(message.type == 'cardUnselectedByOtherUser'){
  //   unselectCell(message.unselectedCardNumber);
  // }

  if (message.type === 'countdown') {
    document.getElementById("countdownValue").innerText = message.countdown;
    if(message.countdown === 1){
      //reset the cells if the user didn't start after selecting card
      // location.reload(); do something like this
    }
  }

  // game-start
   if (message.type === 'game-start') {
    myRoomHasStartedBeforeIGoIn = true; //tell the player that they were left out
    const winAmount = message.winAmount;
    const numberOfPlayers = message.numberOfPlayers;
    const gameId = message.gameID;
    document.getElementById("derash-value").innerHTML = winAmount;
    document.getElementById("players-value").innerHTML = numberOfPlayers;
    document.getElementById("game-value").innerHTML = gameId;
    document.getElementById("countdownValue").innerText = 'ON';
   }
  
   // Check if the message is a number call from the server
   if (message.type === 'numberCall') {
    const calledNumber = message.number;
    // console.log('Called Number:', calledNumber);


    //change the number of call value
    document.getElementById("call-value").innerHTML = message.callCounter;

    // Determine the letter for the called number
    let prefix = '';
    if (calledNumber >= 1 && calledNumber <= 15) {
        prefix = 'B';
    } else if (calledNumber >= 16 && calledNumber <= 30) {
        prefix = 'I';
    } else if (calledNumber >= 31 && calledNumber <= 45) {
        prefix = 'N';
    } else if (calledNumber >= 46 && calledNumber <= 60) {
        prefix = 'G';
    } else if (calledNumber >= 61 && calledNumber <= 75) {
        prefix = 'O';
    }

    // Display the called number in the UI
    document.getElementById("currentNumber").innerText = prefix + '-' + calledNumber;

    // Update recent calls
    recentCalls.push(prefix + calledNumber);
    if (recentCalls.length > 4) {
        recentCalls.shift();
    }

    for (let i = 0; i < recentCalls.length; i++) {
        const divId = `recent${['One', 'Two', 'Three', 'Four'][i]}`;
        const div = document.getElementById(divId);
        div.textContent = recentCalls[i] || '';

        const currentPrefix = recentCalls[i].charAt(0);
        div.style.backgroundColor = getBackgroundColor(currentPrefix);
    }

    // Mark the called cell in the 10x10 grid
    const cellId = `cell-75-${calledNumber}`;
    const cell = document.getElementById(cellId);
    if (cell) {
        if (lastCalledCellId) {
            const lastCell = document.getElementById(lastCalledCellId);
            if (lastCell) {
                lastCell.classList.remove('number-grid-cell-flashing');
                lastCell.classList.add('number-grid-cell-marked');
            }
        }

        cell.classList.add('number-grid-cell-flashing');
        lastCalledCellId = cellId;

        setTimeout(() => {
            cell.classList.remove('number-grid-cell-flashing');
        }, 3500);
    }
  }

  if((message.type === 'bingoWinnerAnnounced') || (message.type === 'bingoClaimedByOtherUser')){

    winningNumbers = message.winningNumbers;
    lastCalledCellNumber = message.lastCalledNumber;

    showModal(gameOverModal);
    // Clear existing content to prevent duplication
    document.getElementById("gameOverBingoHeader").innerHTML = '';
    document.getElementById("gameOverBingoGrid").innerHTML = '';

    
    generateBingoHeader(message.winner);
    generateBingoGrid(message.card, message.calledNumbers); // Pass the card number to the function
 
  }

  if(message.type === 'bingoClaimRejected'){
    console.log('You are disqualified');
    showModal(disqualificationModal);
  }

  if(message.type === 'gameEnd'){
    console.log('Game ended');
    showModal(gameEndModal);

  }
  

};

socket.onclose = () => {
  console.log('Disconnected from the server');
};

 // Function to send the join room message
 function joinRoom(playType, roomNumber, dbId) {
  const message = {
    type: 'joinRoom',  // Message type
    playType: playType, // Game type (e.g., 'play10', 'play20')
    roomNumber: roomNumber, // Room number (0 for Room 1, 1 for Room 2)
    dbId: dbId
  };

  // Send the joinRoom message
  socket.send(JSON.stringify(message));
}

// Function to get background color based on prefix
function getBackgroundColor(prefix) {
  switch (prefix) {
      case 'B':
          return 'orange';
      case 'I':
          return 'lightgreen';
      case 'N':
          return 'lightblue';
      case 'G':
          return 'red';
      case 'O':
          return 'purple';
      default:
          return '';
  }
}



document.addEventListener("DOMContentLoaded", () => {
 
    // Start Game Button - Hides Card Selection Screen and Shows Game Play Screen
    startButton?.addEventListener("click", () => {

      if(selectedCardNumber == 0){
        return;
      }

      // Retrieve the wallet and stake values
      const walletValue = parseFloat(document.getElementById("wallet-value").innerText);
      const stakeValue = parseFloat(document.getElementById("stake-value").innerText);
      const demoValue = parseFloat(document.getElementById("demo-value").innerText);

      // Check if the values are numbers and compare them
      if (!isNaN(walletValue) && !isNaN(stakeValue)) {
        if (stakeValue > walletValue) {
          showToast("Please topup your wallet!");
          return;
        }
      } else {
        showToast("Could not retrieve valid numbers for wallet or stake values.");
        return;
      }

      //check demo count is not > 5
      
      // Check if the values are numbers and compare them
      if ((demoValue > 5) && (stakeValue === 0)) {
          showToast("You have finished your demo plays!");
          return;
      }


      if(activeGames === 2){
        showToast('Both of the rooms are in playing phase, please wait a moment till they finish.');
        return;
      }

      //check if the room has not started before you go in
      if(myRoomHasStartedBeforeIGoIn){
        showToast('The game started before you go in');
        location.reload(true);
        return;
      }



      console.log("Starting room: " + roomNumber);


      socket.send(JSON.stringify({
          type: 'startGame',
          playerId: playerId,
          playType: playType,
          roomNumber: roomNumber,
          cardId: selectedCardNumber,
          dbId: dbId
      }));      
      

      cardSelectionScreen.style.display = "none";
      gamePlayScreen.style.display = "flex";
      
    
    // Call the function to generate and fill the grid when the page loads
    generateGameCardGrid(selectedCardNumber);  // You can pass a different preset index if needed
    });
  
    // Show Disqualification Modal
    showDisqualificationButton.addEventListener("click", () => {
      showModal(disqualificationModal);
    });
  
    // Show Game Over Modal
    // showGameOverButton.addEventListener("click", () => {
    //   showModal(gameOverModal);
    //   // Clear existing content to prevent duplication
    //   document.getElementById("gameOverBingoHeader").innerHTML = '';
    //   document.getElementById("gameOverBingoGrid").innerHTML = '';
    //   // if(who === 0){
    //   //     document.getElementById("whoWon").textContent = "You just won the game!";
    //   // }else{
    //   //     document.getElementById("whoWon").textContent = `Card ${cardNumber} has won the game!`;
    //   // }
    //   generateBingoHeader();
    //   generateBingoGrid(selectedCardNumber, [9, 28, 38, 52, 75, 64, 1, 67, 23, 18, 7]); // Pass the card number to the function
    // });


  });

  function sendBingoClaim(){
    const bingoClaimMessage = {
      type: 'bingoClaim',
      playerId: playerId,
      playType: playType, // Dynamic value, based on the room or game type
      roomNumber: roomNumber, // Room number, dynamically set
      cardId: selectedCardNumber - 1, // The player's selected card
      dbId: dbId // Unique player ID in the database
  };

  // Send the bingo claim message to the server
  socket.send(JSON.stringify(bingoClaimMessage));

  }

  

  function sendLeaveRoom(){    
    const leaveRoomMessage = {
      type: 'leaveRoom',
      playerId: playerId,
      playType: playType, // Dynamic value, based on the room or game type
      roomNumber: roomNumber, // Room number, dynamically set
      cardId: selectedCardNumber - 1, // The player's selected card
      dbId: dbId // Unique player ID (possibly retrieved from the session or WebSocket connection)
  }

  // Send the bingo claim message to the server
  socket.send(JSON.stringify(leaveRoomMessage));

  location.reload(true);
}

function playAgain(isRefresh){

  //unselect the card if it is refresh
  if(isRefresh){
    const message = {
      type: "unSelectCard",
      playerId: playerId,
      playType: playType, // Dynamic value, based on the room or game type
      roomNumber: roomNumber, // Room number, dynamically set      
      cardId: selectedCardNumber, // The player's unselected card
      dbId: dbId // Unique player ID (possibly retrieved from the session or WebSocket connection)
    };
    
  // Send the joinRoom message
  socket.send(JSON.stringify(message));
  }

  closeModal('game-over-modal');
  closeModal('disqualification-modal');
  location.reload();
}
  
  // Function to Show a Modal
  function showModal(modal) {
    modal.classList.add("show-modal");
  }
  
  // Function to Close a Modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("show-modal");
  }

 // Handle cell click in the 10x10 grid and populate the 5x5 grid on selection screen
 function populateGrid(number) {

  selectedCardNumber = number;
  if (number <= presetCards.length) { // Ensure number matches a preset card
    const selectedCard = presetCards[selectedCardNumber - 1]; // Get the preset card based on the clicked number
    const selectedCardCells = Array.from(document.querySelectorAll(".selected-card-grid-cell")); // Get cells dynamically

  // Update the myCard display with the selected number
  document.getElementById("myCard").innerHTML = `${selectedCardNumber}`;

    // Populate the 5x5 grid with the selected preset card values
    selectedCardCells.forEach((cell, index) => {
      cell.textContent = selectedCard[index];
    });
  }
}


// Function to clear only the user's selection
function unselectUserCell() {
  if (currentSelectedCell) {
    currentSelectedCell.classList.remove("selection-cell-user-selected");
  }
}

// Function to clear only the user's selection
function unselectCell(unselectedCardNumbernumber) {
  const cellId = `cell-${unselectedCardNumbernumber}`;
  const cell = document.getElementById(cellId);
  cell.classList.remove("selection-cell-other-selected");
}

// Function to handle cell selection
function selectCell(number, selector) {
  const cellId = `cell-${number}`;
  const cell = document.getElementById(cellId);

  if (!cell) {
    console.error(`Cell with ID="${cellId}" not found.`);
    return;
  }

  // Handle self-selection
  if (selector === "self") {
    // Send unselect message for the previously selected cell if it exists
    if (currentSelectedCell) {
      const previouslySelectedNumber = currentSelectedCell.getAttribute("data-number");
      
    
    const message = {
      type: "unSelectCard",
      playerId: playerId,
      playType: playType, // Dynamic value, based on the room or game type
      roomNumber: roomNumber, // Room number, dynamically set      
      cardId: number, // The player's unselected card
      dbId: dbId // Unique player ID (possibly retrieved from the session or WebSocket connection)
    };
    
  // Send the joinRoom message
  socket.send(JSON.stringify(message));

      unselectUserCell(); // Clear previous self-selection
    }
    
    // Select the new cell
    cell.classList.add("selection-cell-user-selected");
    currentSelectedCell = cell;

    // Update the myCard div with the selected number
    document.getElementById("myCard").textContent = number;
    populateGrid(number);

    // Send the selected cell to the server for broadcasting
    // socket.send(JSON.stringify({ number, action: "select" })); // Notify server of the new selection

  }
  // Handle other users' selections
  else if (selector === "other") {
    cell.classList.add("selection-cell-other-selected");
  }
}



// Add click event listeners to each cell for self-selection
document.querySelectorAll(".selection-cell").forEach((cell) => {
const number = cell.getAttribute("data-number");

cell.addEventListener("click", () => {
  if (cell.classList.contains("selection-cell-other-selected") || cell.classList.contains("selection-cell-user-selected")) {
      console.log("This cell is unclickable because it is already selected.");
      return; // Exit the function if the cell is unclickable
    }
  if(activeGames === 2){
    showToast('Both of the rooms are in playing phase, please wait a moment till they finish.');
    return;
  }
  selectCell(number, "self"); // Trigger selection for the clicked cell
});

});

    
    // Function to generate the 5x5 game card grid
    function generateGameCardGrid(presetIndex) {
      const selectedPreset = presetCards[presetIndex - 1]; // Choose the preset card
      const gridContainer = document.getElementById('gameCardGrid'); // Get the grid container
    
      // Loop to generate the 5x5 grid
      for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div'); // Create a new cell
        cell.classList.add('game-card-cell'); // Add the common class for styling
        
        // Add the cell number or * (center cell)
        if (i === 12) { // The center cell (index 12) is always marked as FREE
          cell.textContent = '*';
          cell.classList.add('marked'); // Mark it with a special style
        } else {
          cell.textContent = selectedPreset[i]; // Fill cell with value from preset

          // Add an event listener to toggle the "marked" class on click
          cell.addEventListener('click', () => {
            cell.classList.toggle('marked'); // Toggle the marked style
          });
        }
    
    
        // Append the cell to the grid container
        gridContainer.appendChild(cell);
      }

      document.getElementById("gameCardFooterCardNumber").innerText = "Card number: " + selectedCardNumber;
    }
    
  function generateBingoHeader(whoWon) {
    document.getElementById("whoWon").innerText = whoWon + ' just won the game.';
    const bingoHeader = document.getElementById("gameOverBingoHeader");
    const letters = ['B', 'I', 'N', 'G', 'O'];

    // Clear any existing content (in case of multiple calls)
    bingoHeader.innerHTML = '';

    letters.forEach(letter => {
        const cell = document.createElement('div');
        cell.className = `game-over-bingo-header-cell ${letter}`;
        cell.textContent = letter;
        bingoHeader.appendChild(cell);
    });
}

// Function to generate the BINGO grid and highlight winning cells
function generateBingoGrid(cardNumber, calledNumbers) {
  console.log("The wining card is " + cardNumber);
  const bingoGrid = document.getElementById("gameOverBingoGrid");
  const card = presetCards[cardNumber - 1]; // Get the selected card from the presetCards array
  
  // Calculate winning indices based on the called numbers and card
  const winningIndices = getWinningIndices(calledNumbers, card);

  // Display the card number in the modal footer
  document.getElementById('cardNumberModalFooter').innerHTML = cardNumber;

  // Generate each cell for the bingo grid
  card.forEach((number, index) => {
      const cell = document.createElement('div');

     const lastCalledCellIndex =  getIndexOfNumber(card, lastCalledCellNumber);

      // Determine the appropriate styling based on called numbers and winning pattern
      if (calledNumbers.includes(number)) {
          if (winningIndices.includes(index)) {
            if(index === lastCalledCellIndex){
              cell.className = 'game-over-marked-and-called-grid-cell-last-cell';
            }else{
              cell.className = 'game-over-marked-and-called-grid-cell';
            }
          } else {
              cell.className = 'game-over-marked-grid-cell';
          }
      } else {
          cell.className = 'game-over-grid-cell';
      }

      cell.textContent = number; // Set the cell content

      // Additional style for the free cell
      if (number === '*') {
          cell.classList.add('game-over-marked-and-called-grid-cell');
      }

      // Append cell to the bingo grid
      bingoGrid.appendChild(cell);
  });
}

// getWinningIndices function
function getWinningIndices(calledNumbers, card) {
  const winningIndices = [];

  // Convert calledNumbers and winningNumbers to Sets for quick lookup
  const calledNumbersSet = new Set(calledNumbers);
  const winningNumbersSet = new Set(winningNumbers);

  // Loop through the card to find the indices of winning numbers
  for (let i = 0; i < card.length; i++) {
      const number = card[i];
      // Check if the number is in both calledNumbers and winningNumbers
      if (winningNumbersSet.has(number) && calledNumbersSet.has(number)) {
          winningIndices.push(i);
      }
  }

  return winningIndices;
}


function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Hide the toast after 1 second
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1000);
}

function getIndexOfNumber(card, targetNumber) {
  // Loop through the card to find the first occurrence of targetNumber
  for (let i = 0; i < card.length; i++) {
      if (card[i] === targetNumber) {
          return i; // Return the index as soon as a match is found
      }
  }
  
  return -1; // Return -1 if the number is not found
}