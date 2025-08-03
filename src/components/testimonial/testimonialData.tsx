type fromProps = "Booking" | "Airbnb";

interface Testimonial {
  male: boolean;
  name: string;
  imgNumber: number;
  from: fromProps;
  key: string;
}

export const testimonialArray: Testimonial[] = [
  {
    key: "testimonial1",
    male: false,
    name: "Milena",
    imgNumber: 1,
    from: "Booking"
  },
  {
    key: "testimonial2",
    male: true,
    name: "Nenad",
    imgNumber: 1,
    from: "Booking"
  },
  {
    key: "testimonial3",
    male: true,
    name: "Pavel",
    imgNumber: 2,
    from: "Airbnb"
  },
  {
    key: "testimonial4",
    male: true,
    name: "Dargre",
    imgNumber: 3,
    from: "Booking"
  }
];
