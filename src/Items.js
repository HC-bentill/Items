import React from 'react'

function Items() {

    var services = [ 
        "painter"," electrician","Plumbing","Carpenter",
        "Tiling","Movers Trucks","Gardener","Laundry","Cleaners",
        "Fumigators","Refrigerators","Building supplies","Roofing",
        "Glass window installation","Accounting","Web designing","Graphic designing",
        "Architecture","Lawyer","Fashion designer","Counseling","Party and event planner",
        "Caterer","Party supplies","Photography","Videography","chef","DJs"
    ]
    

    var foodEssentials = [
        " Glocery shop","Pastries shop","Butcher Shop","Pizza shop",
        "Restaurant","Ice cream shop","Juice bar smoothies shop",
        "Organic food shop","wine shop"]

      


    var education = [
        "Preschool","Primary school",
        "Junior high school",
        "Private secondary schools",
        "Private tutors","Professional schools"]

        



    var health= [
        " Pharmacy","Dentist","Gym","Private Hospitals and Clinics","Herbal medicine","Eye clinic"]
      

    var automotive = 
    [" Auto repairs","Car dealers","Car rentals",
    "Motorcycle repairs","Car wash","Tires and rims repairs",
    "Towing car","Auto detailing","Car stereo installation","Auto Glass service",
    "Windshield installation and repair","Oil change centres","Auto parts and supplies",
    "Auto upholstery"]

    


    var beautySpa = [
        "Cosmetics supplies","Hair salon","Massage parlour","Barber Shop",
        "Nail and eyelash salon","Makeup artist","Teeth whitening","Acne treatment"] 
        
    


     var electronics = [
         "Phones"," Computers and accessories","Home Appliance","Kitchen appliance"]

         


    var fashionLifestyle = [
    "Fabrics","Men wear","Men footwear","Men accessories",
    "Ladies wear","Ladies footwear","Ladies accessories","Kids wear","Kids footwear",
    "Jewelry","Perfume"]

    

     var property =[
    "Land for sale","Land for rent","Office space for rent",
    "Stores for rent","Event venue", "Short- stay rental"]
    

     var jobs =  
    ["IT Jobs","Retail Jobs","Sales Jobs","Health Jobs",
     "Marketing Jobs", "production Jobs", "Education jobs",
     " Food Jobs","fashion Jobs", "transportation Jobs"]
      

    var homeFurnishing = [
         "Furnitures", "Bed","Wardrobe",
          "kitchen cabinet installation","TVstand","bookshelf",
          "Carpets","curtains","mattress"]
          


    var handleCase = (str) => str[0].toUpperCase()
     + str.slice(1).toLowerCase();

     var handleSortCase = (arr)=>arr.map(handleCase).sort
     
     {/*testing*/}
     console.log(handleSortCase(homeFurnishing)) 

 

    return ( 
        
        <div className="items">
            
            
        </div>
    )
}

export default Items
