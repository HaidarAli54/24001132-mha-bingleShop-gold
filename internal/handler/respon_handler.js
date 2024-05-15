
class ResponHandler {
    async response(req,res){
         try {
            res.status(200).json({
                massage: 'Server Running'
            })
                console.log('Lanjutkan')    
                return
            }
            catch (error){
                res.status(500).json({
                    massage:'Server Busy',
                    data: null,
                    err: error.massage
                }) 
                return
            }
        
    }
}

module.exports = {ResponHandler}