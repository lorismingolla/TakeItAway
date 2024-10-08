create table "public"."pizzas_toppings" (
    "created_at" timestamp with time zone not null default now(),
    "pizza_id" bigint not null,
    "topping_id" bigint not null
);


alter table "public"."pizzas_toppings" enable row level security;

create table "public"."toppings" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "name" character varying
);


alter table "public"."toppings" enable row level security;

alter table "public"."pizzas" alter column "base_price" set not null;

alter table "public"."pizzas" alter column "base_price" set data type double precision using "base_price"::double precision;

alter table "public"."pizzas" alter column "created_at" set not null;

alter table "public"."pizzas" alter column "id" set generated by default;

alter table "public"."pizzas" alter column "name" set not null;

alter table "public"."pizzas" alter column "name" set data type character varying using "name"::character varying;

alter table "public"."pizzas" enable row level security;

CREATE UNIQUE INDEX pizzas_name_key ON public.pizzas USING btree (name);

CREATE UNIQUE INDEX pizzas_toppings_pkey ON public.pizzas_toppings USING btree (pizza_id, topping_id);

CREATE UNIQUE INDEX toppings_pkey ON public.toppings USING btree (id);

alter table "public"."pizzas_toppings" add constraint "pizzas_toppings_pkey" PRIMARY KEY using index "pizzas_toppings_pkey";

alter table "public"."toppings" add constraint "toppings_pkey" PRIMARY KEY using index "toppings_pkey";

alter table "public"."pizzas" add constraint "pizzas_name_key" UNIQUE using index "pizzas_name_key";

alter table "public"."pizzas_toppings" add constraint "public_pizzas_toppings_pizza_id_fkey" FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."pizzas_toppings" validate constraint "public_pizzas_toppings_pizza_id_fkey";

alter table "public"."pizzas_toppings" add constraint "public_pizzas_toppings_topping_id_fkey" FOREIGN KEY (topping_id) REFERENCES toppings(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."pizzas_toppings" validate constraint "public_pizzas_toppings_topping_id_fkey";

grant delete on table "public"."pizzas_toppings" to "anon";

grant insert on table "public"."pizzas_toppings" to "anon";

grant references on table "public"."pizzas_toppings" to "anon";

grant select on table "public"."pizzas_toppings" to "anon";

grant trigger on table "public"."pizzas_toppings" to "anon";

grant truncate on table "public"."pizzas_toppings" to "anon";

grant update on table "public"."pizzas_toppings" to "anon";

grant delete on table "public"."pizzas_toppings" to "authenticated";

grant insert on table "public"."pizzas_toppings" to "authenticated";

grant references on table "public"."pizzas_toppings" to "authenticated";

grant select on table "public"."pizzas_toppings" to "authenticated";

grant trigger on table "public"."pizzas_toppings" to "authenticated";

grant truncate on table "public"."pizzas_toppings" to "authenticated";

grant update on table "public"."pizzas_toppings" to "authenticated";

grant delete on table "public"."pizzas_toppings" to "service_role";

grant insert on table "public"."pizzas_toppings" to "service_role";

grant references on table "public"."pizzas_toppings" to "service_role";

grant select on table "public"."pizzas_toppings" to "service_role";

grant trigger on table "public"."pizzas_toppings" to "service_role";

grant truncate on table "public"."pizzas_toppings" to "service_role";

grant update on table "public"."pizzas_toppings" to "service_role";

grant delete on table "public"."toppings" to "anon";

grant insert on table "public"."toppings" to "anon";

grant references on table "public"."toppings" to "anon";

grant select on table "public"."toppings" to "anon";

grant trigger on table "public"."toppings" to "anon";

grant truncate on table "public"."toppings" to "anon";

grant update on table "public"."toppings" to "anon";

grant delete on table "public"."toppings" to "authenticated";

grant insert on table "public"."toppings" to "authenticated";

grant references on table "public"."toppings" to "authenticated";

grant select on table "public"."toppings" to "authenticated";

grant trigger on table "public"."toppings" to "authenticated";

grant truncate on table "public"."toppings" to "authenticated";

grant update on table "public"."toppings" to "authenticated";

grant delete on table "public"."toppings" to "service_role";

grant insert on table "public"."toppings" to "service_role";

grant references on table "public"."toppings" to "service_role";

grant select on table "public"."toppings" to "service_role";

grant trigger on table "public"."toppings" to "service_role";

grant truncate on table "public"."toppings" to "service_role";

grant update on table "public"."toppings" to "service_role";

create policy "Enable read access for all users"
on "public"."pizzas"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."pizzas_toppings"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."toppings"
as permissive
for select
to public
using (true);



