create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  company text,
  phone text not null,
  email text not null,
  message text not null,
  status text default 'unread'
);

alter table inquiries enable row level security;

drop policy if exists "Anyone can insert inquiries" on inquiries;
create policy "Anyone can insert inquiries"
  on inquiries for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated users can select inquiries" on inquiries;
create policy "Authenticated users can select inquiries"
  on inquiries for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can update inquiries" on inquiries;
create policy "Authenticated users can update inquiries"
  on inquiries for update
  to authenticated
  using (true);
