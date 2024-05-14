
class ResponHandler {
    async response(req,res){
         try {
            res.status(200).json({
                massage: 'Server Running'
            })
                console.log('Lanjutkan')    
                return
            }
            catch{
                res.status(500).json({
                    massage:'Server Busy'
                })
        }
        
    }
}

module.exports = {ResponHandler}