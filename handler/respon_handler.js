
class ResponHandler {
    async response(req,res){
         try {
            res.status(200).json({
                massage: 'Berhasil berjalan'
            })
                console.log('halo ')    
                return
            }
            catch{
                res.status(500).json({
                    massage: 'Server Sibuk'
                })
        }
        
    }
}

module.exports = {ResponHandler}