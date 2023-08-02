FROM hugomods/hugo:latest


COPY . /src/

EXPOSE 1313

ENTRYPOINT [ "hugo", "server", "--bind=0.0.0.0"] 