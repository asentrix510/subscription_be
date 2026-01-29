import {Router} from express;
const subscriptionRouter=Router() //instantiation
subscriptionRouter.get('/',(req,res)=>{
    res.send("Get all subscriptions")
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send("Get subscription details")
})
subscriptionRouter.post('/',(req,res)=>{
    res.send("Create subscription")
})
subscriptionRouter.put('/:id',(req,res)=>{
    res.send("Update subscription")
})
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send("Delete subscription")
})
subscriptionRouter.get('/user/:id',(req,res)=>{
    res.send("Get all user subscriptions")
})
subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send("Cancel all user subscriptions")
})
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send("Get upcoming renewals")
})
export default subscriptionRouter