class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
//doesn't work because honk is protected
vehicle.honk();

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();