# Copyright SecureKey Technologies Inc. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0

FROM nginx:latest

COPY build/bin/wallet-web/ /usr/share/nginx/www/
COPY images/wallet-web/templates/ /etc/nginx/templates/

# defines environment variables
# NOTE: nginx will not start without them since we are using them in templates/default.conf.template
ENV HTTP_RESOLVER_URL=
ENV AGENT_DEFAULT_LABEL=
ENV AUTO_ACCEPT=false
ENV LOG_LEVEL=
ENV INDEXEDDB_NAMESPACE=
ENV BLOC_DOMAIN=
ENV WALLET_MEDIATOR_URL=
ENV CREDENTIAL_MEDIATOR_URL=
ENV BLINDED_ROUTING=
ENV STORAGE_TYPE=edv
ENV EDV_SERVER_URL=
ENV KMS_TYPE=local
ENV USE_EDV_CACHE=false
ENV KMS_TYPE=local
ENV EDV_CLEAR_CACHE=
ENV EDGE_AGENT_SERVER=
ENV USE_EDV_BATCH=false
ENV EDV_BATCH_SIZE=0
ENV CACHE_SIZE=100
