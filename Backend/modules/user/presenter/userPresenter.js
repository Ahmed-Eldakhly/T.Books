function present(user) {
    return {
        'id': user._id,
        'userName': user.userName,
        'firstName' :user.fName,
        'lastName':user.lName,
        'email' :user.email,
        'avatar': user.userImage,
        'password':user.password,
        'fullName': user.fName +" "+  user.lName,
        'currentlyReadedBooks':user.currentlyReadedBooks,
        'wantToReadedBooks':user.wantToReadedBooks,
        'readBooks':user.readBooks,
        'userReviews':user.userReviews,
        'userRating':user.userRatings,
        'token ':user.refreshToken
        
    }
}

module.exports = {
    present
}