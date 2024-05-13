
class ResponHandler {
    async response(req,res){
         try {
            res.status(200).json({
                massage: 'Server Berjalan'
            })
                console.log('Lanjutkan Anak Muda')    
                return
            }
            catch{
                res.status(500).json({
                    massage:'Server Sibuk'
                })
        }
        
    }
}

module.exports = {ResponHandler}