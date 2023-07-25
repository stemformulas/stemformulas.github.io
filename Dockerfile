FROM hugomods/hugo:latest


COPY . /src/

EXPOSE 1313

ENTRYPOINT [ "hugo", "server"] 