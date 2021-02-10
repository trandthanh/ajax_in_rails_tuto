import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ]

  refresh(event) {
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
        // console.log(this.countTarget);
        // console.log(data);
      })
  }
}
