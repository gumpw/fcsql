create sequence CMF.{{sql.sequence}}
minvalue 1
maxvalue 9999999999
start with 1
increment by 1
cache 20;

grant select on CMF.{{sql.sequence}} to CMFUSER;

create or replace synonym CMFUSER.{{sql.sequence}}
  for CMF.{{sql.sequence}};