CREATE TABLE
    pizzas (
        id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name TEXT,
        base_price TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
)