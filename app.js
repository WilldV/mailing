
const nodemailer = require("nodemailer"), fs = require("fs");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'pruebakomarca@gmail.com',
            accessToken: 'ya29.GluXBprQ3vK6ug0ahIOD5g6rYI3XrN6GVwMlSWnb-L6IkSzSKTuECVnfPkeuMWzAbuevwTxiO8iNjjDcYSlTR_eXDVwG5ZT5xd80-dJJozyM1bZs_EVxZGe1dmkW'
        }
    });

  
    var readHTMLFile = function(path, callback) {
        fs.readFile(path, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    readHTMLFile('indexOK.html', function(err, html) {
        let mailOptions = {
            from: 'pruebakomarca@gmail.com', 
            to: "williansd555@hotmail.com", 
            subject: "Hello ✔", 
            text: "Hello world?",
            html: html
          };
          
          transporter.sendMail(mailOptions)
        
    });
    
  

}

main().catch(console.error);