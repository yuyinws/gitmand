# Gitmand

**display your most used command on GitHub/Gist**

![gitmand](https://raw.githubusercontent.com/yuyinws/gitmand/master/gitmand.svg)

![Snipaste_2022-08-14_21-24-53.png](https://s2.loli.net/2022/08/14/HzGWFiNQ6UYPIhB.png)

## workflow overview
![Snipaste_2022-08-14_21-22-06.png](https://s2.loli.net/2022/08/14/uUypvMAVxwDscBI.png)

## Usage
1. download cli
```
$ npm install -g gitmand
```

2. generate origin data
```
$ gitmand
```
It will generate a file named `gitmand.json`, which includes your command data. You should push this to a GitHub Repo.

3. config `GitHub Actions`  
See [action.yaml](https://github.com/yuyinws/gitmand/blob/master/action.yaml)
```yaml
# gitmand.yaml
name: gitmand action
on: push

jobs:
  gitmand:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Gitmand
        id: gitmand
        uses: yuyinws/gitmand@master
        with:
          gist_id: GIST_ID
          limit: 15

      - name: Update gist
        if: steps.gitmand.outputs.gist_id
        uses: exuanbo/actions-deploy-gist@main
        with:
          token: ${{ secrets.GIST_TOKEN }}
          gist_id: ${{ steps.gitmand.outputs.gist_id }}
          file_path: Gitmand
          file_type: text

      - name: Update file
        uses: DamianReeves/write-file-action@master
        with:
          path: gitmand.svg
          write-mode: overwrite
          contents: ${{ steps.gitmand.outputs.svg }}

      - name: Commit file
        run: |
          git add gitmand.svg
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git commit -m "update gitmand.svg [skip ci]" -a

      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref }}
```

**Note**
The `Actions Config` and `gitmand.json` must exist in One Repo
