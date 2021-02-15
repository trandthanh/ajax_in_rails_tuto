import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = [ 'star' ]

  static values = {
    restaurantId: String
  }


  updateStar(event) {
    // console.log(this.restaurantIdValue);
    // fetch(`/restaurants/${this.restaurantIdValue}/mark_as_favorite`, { method: "PUT", headers: { accept: "application/json" } })
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    fetch(`/restaurants/${this.restaurantIdValue}/mark_as_favorite`, {
      method: "PATCH",
      headers: { accept: "text/javascript", "X-CSRF-Token": csrfToken() }
    })
      .then(response => response.text())
      .then((data) => {
        console.log(data);
        this.starTarget.innerHTML = data;
      })
  }
}


// fetch('/restaurants', { headers: { accept: "application/json" } })
//       .then(response => response.json())
//       .then((data) => {
//         this.countTarget.innerText = data.restaurants.length;
//         // console.log(this.countTarget);
//         // console.log(data);
//       })
