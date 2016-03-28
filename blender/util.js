    // http://62.75.146.210/wordpress/index.php/2014/03/23/rotating-a-vector-by-means-of-a-quaternion/
    // Rotate the vector according to the quaternion
    // quaternion needs to be normalized!!!
    function rotateVector(vector, quaternion) {
        //The given quaternion is R in the form P'=RPR'
     
        //Make a quaternion of the given vector
        var quaternionVec = new CANNON.Quaternion(vector.x, vector.y, vector.z, 0); //P
     
        var quaternionCon = quaternion.conjugate(); //R'
     
        var newQuat = quaternion.mult(quaternionVec); //RP
        newQuat = newQuat.mult(quaternionCon); //(RP)R'
     
        //New vector is contained in calculated quaternion
        return new CANNON.Vec3(newQuat.x, newQuat.y, newQuat.z);
     
    }