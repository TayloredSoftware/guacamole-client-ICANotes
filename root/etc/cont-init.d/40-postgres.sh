#!/usr/bin/with-contenv sh

#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

mkdir -p /config/postgres
mkdir -p /var/run/postgresql 
chown postgres:postgres /var/run/postgresql
chown -R postgres:postgres /config/postgres
chmod 0700 /config/postgres

if [ -e /config/postgres/postgresql.conf ]; then
  echo "Database already configured"
else
  s6-setuidgid postgres initdb
fi
