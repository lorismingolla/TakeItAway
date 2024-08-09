import { Database } from "../supabase";

export type Pizza = Database['public']['Tables']['pizzas']['Row'];
export type Toppings = Database['public']['Tables']['toppings']['Row'];
export interface PizzaWithToppings extends Pizza {
    toppings: Toppings[]
}