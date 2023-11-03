//Type utility
type User = {
  name?: string;
  email: string;
};

//Partial<Type> -- this type makes all proparty optional
// type OptionalUser = Partial<User>

//Required<Type> -- this type makes all proparty required if its optional
// const RequiredUser:Required<User> ={
//     name: "Taifur",
//     email: "taifur@gmail.com"
// }

//ReadOnly<Types> -- this type makes all proparty readOnly you can not modify proparty
// const readOnlyUser:Readonly<User> = {
//     name: "taifur",
//     email: "taifur@gmail.com"
// }
// readOnlyUser.name = "hello"

// Record<Type> - this type use for create type
// type User2 = Record<"name"| "email", string>

//Pic<Type> -- you can access spicific proparty for type
// interface OrderInfo {
//    readonly id: string
//    user: string
//    city: string,
//    state: string;
//    country: string;
//    status: string
// }
// type ShipingInfo = Pick<OrderInfo, "city"| "id"| "state">

//Omit<Type, Keys> -- you avoid spicific proparty for type
// interface OrderInfo {
//    readonly id: string
//    user: string
//    city: string,
//    state: string;
//    country: string;
//    status: string
// }
// type ShipingInfo = Omit<OrderInfo, "country"| "status">

//
