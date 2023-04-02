let userId: string | number | boolean;

userId = "101";
userId = 201;
userId = false;

function userInfo(userId: string | number) {
  console.log(userId);
}

userInfo(191);
