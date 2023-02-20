const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 46"
      width={46}
      height={36}
    >
      <defs>
        <image
          width="458"
          height="300"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAAChCAYAAABH2P/xAAAn1UlEQVR42u2dhZcUR9fG+U++JLiz6KKLu7tbcA9BE9xCcEkgIcHd3VlcFickuLuEZQkLBFlOfXk675Ae7+qunumeeZ5z7skJZ7u7uqa7fn2r7r2VKRNFURRFUZTb9Pfff4vTp06JFcuWi9EjR4rOHTqK2jVqihLFEkXu7DlE5v/7zMuyfZFZFE5IEBXKlhX169QV3bt2FWNHjxGLFy4Ux44eFc+ePRPsVSoaunL5irh44YJpS3v+nM8uRVGZMr17904c2L9fjBszVtSpWUsDny8MrVqpxOIaQBfOXyCuXrnCwYeyXfPmzjX1rBbIk1d8M2iQOJ6SIj5+/MhnlaLiVe/fvxe7du4UPbt3F3lz5VIORiPgHDl8uDYY8degVGv7tm0i6+dfGH4ec2TJKrp07CR2bN8u8OHIHqSoONbdO3fEd2PHikIFEiIOx2CWVLKUmDZlinj86BEHKMqyTp08GXCJIJA1bdRILF+6TLx48YLPHkXFuy788Yfo0a2byPLZ544BpK9lz5xFfNWrt7h29SoHLcqUbt68GfYjsHKFimLWDz+I+/fv8zmjKCpTphs3bohunbs4Fo6BDDDv3qWruHXzFgcyyrBSU1NF2dJlAj5TxYsUFWNGjRb4YGRPURSlKT09XYwZOUpky5zZVZD09TAxuL169YqDGxVSb968EfVq1/Z6frD23q9vX3Ho4EGRkZHBZ4iiqP+0e9cuUbxoMdcC0tdKJiaK5D3JHOiogAIEO3Xo8G+q0j8fhl+2bSc2bdwoAE/2DkVRXoLnNeDrfspBlVi4iGjepKkYPHCg+HHmTIGw+9WrVok1q1eLRQsWip9mzdYChPr07CUa1K0nEvLmswWY3w4ezMGP8tOwb4eI+rXraM8ic3Ypigqqy5cui/JJSUqAlD93HtG3Tx+xds0ace/uXVMDz4MHD8T2rdu0ggUInlAFy+pVqojbt25zMKQ0paWlcS2boqjw2rp5i8iTI6clAKHIAAJoknfvsSWPDHBDpGGlcuUtwxIea8qxYxwcKYqKD2EaL5w9euie/DpM/4S7nyWLFimr+DH7xx8tQQcBD99/952ABxipPjpy+LDo2L695UAfrEPZ3VZ8OBh5Rp1mGzdsEEePHBHIm432O4HiFpimN2t4X9zS704aq/ABLdv+ixcvOn6s3bNrd9hnJuZSzIwMim7xHgAAI/czbMhQJfeDknNWQIPKOAipj1Z/IVS/TcuWpu8BlVfWrVlra/tR59btwVB5cuYSLZs1FzOmTY/KQPjXX3/FTGCZW8YqzOCYKUWJWs1OH2drVq0W9j4AfYLSocLUpZFB68mTJ5bvZ+g335p+mVs0bSbu3HbOOh+8NpS0MwtLeE8EpXGrWLacmPvLLwIAIyhjE5T9+35t+h4QNU9QEpS26OnTp4ZyFqdMmmT5XiaO/97UC5AvV25tRxAn9t/rV6/FoAEDTXvHBw8csOW+YhGU+uLfmLq3O5KYoIysMO0oU+fW12pWq05QEpT26IcZM8PeB0prvXz50tK9zJ87z9TDj22ynORFBtPmTZtMBSYhUvf6tWvK7y+WQekxBFidPXNGEJSxAcpe3XtYvg9smEBQEpRKhcCc0sVLhL0PTHdZuc7e5GRTX4rIb8Qek255JrAPIEqOmZlSVF3FJx5A6Yl6XjBvviAo3Q1K7L+pop6zk71KgtKloATAjGwrZSXtAovzZhL5EdHqxucCBavLlZHPC+3doydBacGwiwtB6V5QqnxeseUYQUlQKpORVAck75s9/4cPH7QNlWUf9NmzZrn6YUGovRlYYvqWoDRvixcuFNEAJTyhMiVKutrsnMIOJ0SRq3wOUCjEiRtXE5QuBCXyD8NNh1atVNnSAzdpwkTph1xF0JAThHVVlNCTufdC+QuI56nPRaRA2bRR44jk6CHwZvrUqUFt/LhxmkddpWIlU6kB+uCo38+fF5EGJYKLMlGm1aFde+UfTSo/OgnKOAYlgBSu/UiQtbJeJzvoYceEWHpGzp07J3JmzSbVB4P6D4gYKFGmz2l9hrXa7du2acXCzaxZoVRgxgc1O24QlPYLnqwdswtO9CoJSpeBEgNJuKCTxg0aWmo7ij3LJgyjEkqsDQQrl6+Q3tPyj99/t9wPbgWlXkgXaNuqtfQguWrlSoLSJZL5ffG8oq/d6lUSlC4DJb7Yw7X95ImTptuOqjMyA1vBfPkjWoou0uretatUf6DqD0H5nzB4yERNI22EoHS+jqekSOXO4vfAVL1MNLmq2QWCMg5BGa78GoJ8zJ4bXqFstRo7K9Q4QdhCCeuPMn1iNbgilkAJrVoh55mfOnnS8r0RlPaqWeMmhn9PANLzm8h4laifSlASlNJCuka4qT/kNJk9/9IlS6QGNCtQdpPWr10X0X6JNVBCWL812n9jR48hKB2sY0ePSnuTnmNlvEpEnzvFqyQoXQRKRBjaFVCDxfOypcsYfogR6OKEXSIiJazDyqxVWqlIFIugfPHihbZrTKQSzwlKZ7wLHm9S/7u40askKF0CShQOQDm6YO3NkSWrpbVClI+S8ZrcNlBH8ivaatGFWAQlNGTwN8Yq9mTObDk4jKC0Rwf27zftTbrZqyQoXQJKrAWGau+YkaMstVcmHypXtuwCa3fxNki0btHCcB8VL1pMZGSYe8FjFZT79u413H9Wa+gSlPaobq1apr1Js17lsqVLCUqC0piaNmoUsji3lWR3bRcSibzJbwcPjsvBRWagt/IMxSoo09LSDPfd4UOHCUqHSWbWKZg3acarRIBhtNPPCEoXgBI5aaHaOnP6DEttXbJ4sRQALl26FJeDi+w67qgRIwhKH2GJIBI7SRCUNsCiWnXL3qRZrxKBhgQlQRlSI4cPD9rOYoUKC+yraOX84VJO9Fareo24Hlh+nv2T4b4qn5REUPqocEKCob5DpDFB6Rxt3bxFmTfpRq+SoHQ4KLHBbagvL6vFpN++fStVqs3tRc+tCtGsMt63mQCrWAZl7uw5DPXbzh07CEoHzaSgrJwqb9KsV6m6cD5BGUOgREmvUBFhVr+ycJ8yA78dGxW7TfCqjfbXpo0bCUrdR5nRfjt65AhB6RDhGVbtTZrxKrFRQbT2uCUoHQ7KerVrKx2EfQUP0XAkZ5GiHFT+0dTJkw33mZlo5FgFpUwR7Xv37hGUDhBSM2S2nTPqTZr1KqMFI4LSwaAMtdebqt3AZWqZ4m85dGTKdPDAAcN91qJpM4LyfzK6vlu0YCEWHHCIkPBvlzfpJq+SoHTpxs2qhH0EuT4pp/T0dMOFvvFiE5T/qlrlyob6DNt0EZTRF5Z1ZKK8Zb1JN3mVBGUcgxKL9EbD9WHJu/dwUPmfENFqtN+wNhfvoNy9a5fh/tqwfj1B6QDJ1H42602a8Sox42A10p+gJCgN68mTJ1KBPMjn5PDxr75s285wv924cSOuQYlCA2VKlDTUV6gHi0hvgjL63qTMTkJmvUmzXmWkZ7cIyjgGJQoHyIDSyhdjrClUbquvnf/tfNyCEl/+oapK+dqkCRO5H6UDtGDe/Ih5k2a8StS9jqRXSVDGMShlUkOyZ87CAUUnVEOyq5RdrIASnrRMNRdsAq7qY8woKFH+EX/rJPvw4UNUf1sEy2BtPVLepBu8SoIyjkEpU7uUX97ewkthtO/27NodV6B88vixtnuKTCELVWuTsqB0olkt3xfJZ1uVN+l0r5KgjGNQyhY5Jh7/U6hCEL6G8l+xCkrskAIwokDALz/PEW1atjIcEay3r3r1Vno/BKX5qfJQ2/nZ5U2a9SpVX5+gJCgtgTJPjpwEpcmvbtmBzwgoY8ka1W+gPDeOoDQnmQIkqr1JM16lXW0gKAnKT5ItX0c8/qcZ06bbVo4tnkBZu0ZNS1vEEZTq9PLlSylv0q41Qid6lQRlHIPy3NmzjHo1qXFjxhruN/QzQelvTRs1Fhic7RpsCUr7PDm71wed5lUSlHEMytu35HbCuHnzJkH5P3Xt1DmqeZRuN+zVaWd0J0Fprxdnd8SpbHumTJpEUBKU9ghfhDIvsGz0ZiyrUrnyhvoMgS2yO7zEMiiLFy0m9iYni0gM/ASlcSF/1WnRpjJeZZ6cuWyZwicoCUpNMmsSc376maDM9G/VkmxfZDbUZ0klS9lS69VthjzcsaPHCNTJjZSHZKRdSGHBgOwku379ekTfMwAGoHFa/qKsVzlh/HiCkqC0R/Xr1DX8IPbv+zVB+Y9OHD9huM9aNmse16DMlS27lsqCFJJITyUy7cmYABinVsRxildJUMY5KAcPHGj4QTTjHcWinLAfpdOtcvkKWl7ls2fPovLMEJTGhHrP+Jhxao1Vp3iVBGWcg3LJokVSA+DdO3fiHpahNtP2tR3bt9sCSvxNJO+5Xes2Us/J2jVrovqcEJTGBG/fqd6kKa8yR04B+BOUBKVShdocOpAtW7o0rgeW+/fviyyffW64v1JTU2MClPAMZep/YhcQRFUTlM7V40ePHO1NmvUq7ahaRVDGOShRgkzmIWzVvEVcg3LalCmG+wqRsWau4URQQocOHpL6SIDnHa0C3wRleA0Z/I1cxHKRotp2adEwGaDjb1V7lQRlnIMS6t6lq+GHEAMlvKp4HFiw0XXp4iVsXZ90MighFDuXGVwnfj+BoHSgHjx4oEUix2oakmqvkqAkKDOtXrVK6iFE+bZ4HFw2b9ok1U+Ijo01UMJDrF+7juE+QB7p8ZSUqCTQE5TBNaj/gJguaKF5lQojrQlKglIbVHJkyWr4IcRaleoi1m7wJitXqGi4j0omJgocE2ughO7cvq3t4yjTF2lpaUwPcYiwdmw0D9jNhqllgpKgVKouHTtJPYQx91Ao9iZR6cTstZwOSmjTxo1S/YHpfYLSGUI+dDzUEsbUMqaYCUqCUplkNnGON6/yzevXUmuTmG60so7rBlBCA/v1l3pmVi5fEbE2E5SBde3qVVP7hca7V0lQEpSfphbLli4j9RDOnD4jLvpIZqcQWLfOXSz1i1tAiZy6imXLSVVOiVRhfYIysHp17xFXe52q8ioJSoLyk2SLD+TOnkPcunkrpvvp9/Pnpddzzv92Pi5ACSEPV2Z9u07NWtJF4glKNbpy+YpUek+s2KABAwlKglKdMJWKXCmZh7BJw4YCuZix2B+yHhOsY/v2lvvCTaCEFsybL9VH48eNIyijIJnSiAXz5RfNGjdxrJUrk2T4XvCha7X4BUFJUHoJlXdkv9giscN4NNSze3epfsDaz+VLl+MOlFCHdu2lcnGPHD5s+36GBKW35y/zLC9dssTR/SIbuWt1QweCkqD0UsaHDFG9ShVpQERij8FISqa+pMeGDRmqpA/cCErs2iAzG4F9KdOeP4/6xs3xAsov27Yz/NuUSiwekelxq8KUaqS8SoKSoPTTiePHpSGBvLqLFy/GRJ8hOlP2/osVKixevHgRt6CEjh45IrUGhpQkgtJ+nT1zJqa8SY9kqwtZ8SoJSoIyoOAdSe9e/49HEc1C2Cq0Yf16U+HzKneldysoIZSsc8KgTFD+p7atWsecN+nR0G++lfIqkR5DUBKUyoRAlvJJSdLAKFEsUdy4ccOVfbd44UJTUYEDvu6n9H7dDEpM3TesV18qcvr6tWvK74Wg/FcYx2LRm/RIdj9NpMcQlASlUl28cEHkzJpNGhyFExLEmdOnXdN/yCGVLfb9aYPiChUFChIQlP/p3r17UjvS1KxWXbx7907p/RCU/woRorHqTXoks6cmPoTNeJUEJUEZUmtWrzYFEAA22pv3GhHWFdu3aWvqHhPy5rPFe3Y7KKGtm7dI9SWKOhCUaoU141j2Jj36888/tWIWdnqVBCVBGVZmvS1Yn569RHp6unDqQIKpYrMVP7A/ox3tigVQQoMHDpTq04MHDii7J4IyU6b6derGvDfp0YTx46W8ShRfICgJSuXCOpxZWCaVKq10ELSqZ8+eiX59+5q+HwT7bNm82bb7iRVQYkpaZscV1A9OTU1Vcl/xDsoD+/fHhTfpEdKT8uYy7lXKvj8EZYhQYuTSud1UvQCovvNVr96WSknh4bx7507UHiZUHlq0YKE2ZWoFkoiMtbOdsQJK6NKlS1Lr3CoqG8mAEjMDeNfdbIFqmaJUYLx4kx7J5j6jCINKUGL2DEtVsWCGQRkrhh9Y1YMIWMruGBFoYEKi8PXr1yP2YsKzwdcePBarbcd2W3a3N5ZACSGaWKafUXM4UqCMBUPQnf7ekaoUT96k/jeXCSKTeYeMgDKWjKBU8uU2zXK7sE6AB3Xnjh3KIx49QqL1sG+HWPIg9VN0dq1JxjoooU4dOkjtTi+7hkRQ6gb1atXjzpv06MeZM23xKglKgtKUtm/dJhVpFi56FJ4qvLWnT5+abu/Lly/Fnl27BcLFK5Qtq6wPK5UrH7HtoWIVlChXJxM4hTKKb9++FQSlHCixdh6P3qRHyP8uVCDB8P2jRjFBSVDaBkoIieI1qlRV3mbs2IHyZohkW71qlQY/BFf98fvv2qAAT3H/vn1a+snkiZO0/R+rVqosvR2WEUPQz6tXryI6mMQiKKHjKSlSVY9GjRhBUEqAEvnAMsFTseZNevTz7J+k+g/jCUFJUNr6ImDaFOkjdkAqmlYkoaBALmA0XvRYBSU0dfJkqd8BH0QEpTFQbtywIa69SX3Qnkw8Akr8EZQEZUReBmxwLJO35VTD2umg/gNs3dkinkGJgLDGDRoa/j2KFiwkkFBOUIYGJUoHyuzRGKvepEcI3lPpVcYlKJ28IalqU7G7t4w2rFsvypYu48qHo03LVtr0brRfckwnh/td8TduHcSQztCyWXPDz/DsWbOk7xWRzviYiAe7d/euOHXypNS4AO8zUwwL69tYfzTaHzOmTQ/ZH9ibFrCMF8tE2S98qWIDaDNF1aNh7Vq3YYEJiqIoKvJCcAFyulBL1cyuHHYaIm2xlZjZbXcoiqIoSvl0G6LRZCqGqDaks6AgMoJ0rKQeUBRFUZStevzokVi1YoXo27uPKJmYaBsYkbjeqH4Dgc2EUQCdcKQoiqJcKRQZ2JucrHmcKDzQvElTbX0zT46chjb+BWwb1K2neYuTJkzUarGi4gYiAdm7FEVRVEzrw4cPAjsDYDNgvWEfSbtK31EURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEU5Xj17/u1oNFoNBqN5m3jxoyNv222aDQajUYzamVKlCQoaTQajUYjKGk0Go1GIyhpNBqNRiMoaTQajUYjKGk0Go1GIyhpNBqNRoslUPbp2UvMmzvXtE0YP150/PJLkT93HmU3MKj/ANPtmTJpkpYjU7tGTZHti8y2dzau0b5NW7Fg3nxx5vRp8eeff37aEgvbY925fVsk70kW33/3nahQtqzSa7dt1drSb6e3cmWSLLdHVVs8hvtT1VdFCxbSNtD+dc4ckbx7jziekiIuXrggThw/rv0+G9atFz/OnCm+6tVblC1dRvlzkpA3n+jaqbOYPWuW2Lljh0g5dky7/skTJ8W+vXvF5k2bxJyfftae/RpVqirb0Fvfn8OHDrPtPahepYqYNmWKOLB/v7h//754//699h5kZGSIJ0+eaP2N+2vWuInI8tnnyq5bvGgxr3uc9cMP2t6tKsae2T/+6Lj26cdrFe0rmC+/8ve2aaPGltqE+/Kca+rkyc4A5ZrVq5XsdYgXA+fCg2H1Bnbt3KmkTS9fvhRLlyzRNke2A5Ajhg0TTx4/lmrr4UOHNYiraMP0qVOV7VOJAcxqe1QXzMD9WW0ToLN71y7x8eNHw+3DhtiqnpNSicXF2jVrpPYUvXTpkpJrF8iT1+uagLPq9wDPDT4QZX7XWzdvaR8tKq5fs2o1v2sfPXLENIz0Y89ff/3luPbpx2sV7fsEC4UaPXKkpTbhvjznwp68jgTloYMHtYclnOHv8EJjw2H98fCorILAF5RG2oTBEF/n9+7e9fvh3759Kwb266/0K/bc2bPCF4CDBgwUNatVF8WLFNUGKXhpGEimT52mbcLs+Vt8ZauAgC8o0SYjv10gq1qpslJQYhNqs23xWK/uPSy159vBg/2eTwDz4sWL2vnx7MN2bN+ueXcZHzK0vx0zcpSS56RDu/YiPT3d73m8fv265tUCoLj+1s1bxLlz58Tff/+t/e3ypcscD8qsn3+hzaLoz3/t6lUxcfz3olH9BiKpZCnt+nhX6tWuLYYNGaq9n/q/35ucrHk0qkFkBUaRAKWV9tkNSnj/Vt/bju3bxz4ocbDsywgQ6L/Y7965I7JnzqIMlLJtKlaosJg8cdKngccDJ6tTAhok/4Hg7Vu3P50XU6sN6tYz5IGOHzfOa+BetGChUlB27tAxqnP+dnsvMla/Tl2B31zfplUrV2rPRrBjMHDhw6ZkYqLl65cuXkK8ef3a74OvYtlyQY/BO1O/dh0lHy12gxJet+e8r1+9Nvwh2q51G20q1nPs5UuXRb5cuZWDyCyMIgVKs+2zG5S4/2ivHcYkKPXrU/rzdO/aNWqg9FiPbt38BiorHYu1lVMn//sqvn7tmiickCB1Dqzn6gfwAV/3IyhtsPVr13m15/SpUxG9Pj4e9dd/9uyZtmYYyTbYBUqst3vOiY8BwF3meHyIPHr46NM54FGrAhE+XPX/f/DAAamPdrtBCa/bCiwJSpeDEt6a/jw/zZoddVDC0tLSPp3r1atXljoWQUKec8EzNPvlP2PadKGfosyTMxdBqdiOHT3q1Z6NGzZE9PqrV63yuj48p0j3gR2gTCxcxGumZvDAgabO06RhQ6+2tWnZSgmI8OG5ZPFir3/bs2u3YVjaDUqMIQjoMgtLgtL1oGzkdZ5ffp7jCFDqp3mwVmmlYzHYec4Fj8XsefLmyuX1MCAoiKBUayuXr/BqDwb3xg0aRuz6E7+f4DflZmX2wCmgnDl9htcSi5XIcnh7nnMh8lcViPDviLA1A8tIgFKL7DQJS4LS5aD0/YpDGHO0QYmgIlXTbwjMURklqh/IEQhEUKo1RLv6RpoiWAeenuxUoRnDWmja8+d+sAQQsE6HYBg3gvLK5StCVVRy7x49hf63MTOzEgxEgWBkBJaRAiUM6TSysCQoXQpKRK1hmlV/DgS75MyaLaqgbNOypdc6CNStcxfTbUIEpn7a1cr9wfr17Sv0aSwqQLlqxQqB0GxZk11nNQJKRJHiY8KMFSqgpj2IvgsUdepZK0L/Vatc2bYXEdGewdKH8GzO+/VXbQpSZV6hnaDEGqv+fC2aNrN0vhLFEr3Oh75QCSIzsIwkKGHIQ5eBpd2gRGSy2fcWz1vcgBKRgUaSStetWSvgoXkSiz168OCB5ag9X1DiehjUwhmSybdv3SYePnzoNzhhXdBKm8aOHvPpnE+fPrX8I7Vs1tyrjWYi/1TlUeJlVg1KK1LpGSNKGbMdb968Cdq+C3/8oeXEqnrR9YZCHEgyf/HiRdDrYzDAb6ki2tZOUPrOqoSK4DVq+sA2M+lA4UAkC8tIg1IWlk7Oo1SRi+0aUJoVot8ANKt5USoLDkAnjp/QoGS1TZMmTFT64yF9Qd9OM4O0LyiRQwpPTtZUDHhOBaUeWBiksC7mm1upH3i+GzvWlopOObJk1Srz4EMuGLTx0blw/gJL6RJ2ghIfwPrzIQXGahv1KTSBIKICRDKwjAYoZWBJUDoElHiRPYnY4QyJ0SgxhMRqlaHvvqA8e+aMVvIrkMGr9aussm696N6lqxahp6pNQ7/5Vln0rGdaUJ/jaSbv1MlrlJjCwUBtxrJltrf0ID7mMPWN5yfQC48ybFan1sNNYXbp2Els37YtILRRkACesNNAiffJayaiWnVL50Mf68/3Zdt2toHIKCyjBUqjsLQblCgCYfq9VfSBGdPBPCpNdo0StQF9139U1C7VW/MmTZX2EwoieM518+ZNBvNEySqVK69VyfGFlZWobdmgn8ULF/pdH+ktTgzmwXq6FQ8w1KyKmVrIMiAyAstogtIILBnMQ1BaCubxHWyQeIxgAVVtwsOqnzKDh2nlfPrCBWZLlhGU6mzblq1e7cesgd2ebbAPJ4+qVKzkOFDq300UcldVlAEft5EAUThYRhuU4WBJUBKUlqNeUTvTdwpLVUSnb7WXGzdumA7xR3qCvp1m8/sISnWGlA1fUKkOrpGZ1oRQxclpoETkuD6lw+w6Jaaf9TvtYOeWSIEoECw3bdyovc9OAGUoWBKUBKVlUOJBxxqr704MqrYAw9SQPjcPD7OZdZnfz58X+hJbLGEXfdOvQXuKp6sKqjFiqBfsC0oU8XAaKJHKon9+saZlJr1FX/IS1bPMpgSZBVEgWKJ+rX4aPpqgDAZLlPsjKAlKy3mUmEJBUrfvrhqohqOibcg71AfhYP86o8cioRp7H3qOT01N1bZhIiijayhMgVqs+vbv37cvYtfHDhv4oPNdZ7eysYCdtV4R/YpC6J7zrli2XKqtvtPMCLyLBogCwdI3CjqaoAwES9XtIyjjFJSe9UTfWp9W9oDzNeTF6c+Nr7xQietY60KReH3BZlRtsVohxsmgPP/beW2QsGJWigEgmAtFBVABCR8zmN7GRwlmFwrlLyAqV6goenbvLrZs3vxpey39B4yKYDDADxAZMvgbLSE7qVRpDV7YxBkpOYjyXLJokRd0PGkiKJjhxGAej6HYgL7dyEXF9HUo77JOzVpeZevwoWl1rd8qiELB0gmgDAVLO0CJcdPqe2s13UwPShTsMNuOUDsFEZS6vDnfPSPhzVn9SvcYSvT5lihDeS9Ux0FxA0DMs5u9798B2ir62cmgVCErAwH6wsw1MVAAaFb7AlA2c33sSIP9HJ1aws7Xs8QHke9+hvhwxMcknk/UhkVxEmzW7FuYxGwhdNUgCgZLp4AyGCydunEzcrNVgdKKwpVYJCj/Z/Ac9IXMIUQ3qqqziYEIG9UivSPcjwYvAes5bVu1VtZPBGVwa9W8hZYnaeSlg+eJvUFV1oAtn5QkMH2rL8oftDLP3bsaTPBsqKwBazcoPWuW8Mzx8ee7/2ewQXT40GHK8q5VgQjmW8jeSaAMBEuCMoKgxHSkPmnUrrqTMpYnR05lbYIH6ZsYa0dBanghGDAATk+Zv59n/yRGjRghWrdoYUtgCAKDIpmob2RgVmmqgrAQvQovDR8SmAnAfzFNCI/I7BZnUh9sBRI0CHfq0OHT9THtWqt6DSWVrIz+JnbfKz5MAfsxI0cJ5KFq78Gvv2r7V6LAgsp0LX0An/4erc4Y4ZlT+fw5vX0YW1W/t1bjQfT3aMXCFQ2RAiWNRqPRaPFmBCWNRqPRaAQljUaj0WgEJY1Go9FoBCWNRqPRaAQljUaj0WgEJY1Go9FoLgIlEjdpNBqNRqN5W3p6uvJiCxRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURQVp3rz+rVIe/5cK/X18eNHlvqiKIpyim7fui1GjxxpyKZMmiTm/fqr2L9vn3jx4oXlwfzxo0cBr7N92zZT5z6ekmL4XiaMHy9mz5oltm3ZKh49fCSsXufypctS5zh18qQYN2asqF+7jsiTM5dX8ejsmbOI8klJok/PXmL92nXi5cuXBCdFUVS0lHLsmKmdALJ9kVl07dRZ/H7+vOlBfPrUqQHPXbp4CVNe1by5c03vbNCkYUNxYP9+YfY6u3buNHTssaNHRf06daXaBpCOGTlKyccJRVEUFSFQeizr51+IX+fMkR7AMzIyRMnExKDn3bd3b0RB6bHBAwcKtM0OUP7y8xyR5bPPTbetSEJBcfDAAcKSoigq2qAsmC+/qFm1mp8VLVgo6CCOKUKZ6ybv3hMSCp07dFQCytzZc4gCefJ+Mt9pzkA28fsJykG5feu2gNcCOKtWqizatmot+vbuIzq2b6/9fzCg4sNk+dJlhCVFUVQ0Qdm/79dBB+JrV6+KNi1b+h0DiCIgxeh1AQT98ZUrVPSb2n3y+LEUEAIBbM3q1QHPce/uXbFi2XKRVLJUwGnlhw8fClWgxDRyUqnSfsd81at30OukpqZqa6gJefN5HZMzazbx48yZBCVFUZRTQQm9e/cu4MC/Y/t2QwM44ADPSH8sphSxA7r+32ZOn2EbKD1CpGmgKeAF8+YrA+X169f9/h7BOkbWYdFX1SpX1o5p2ay5uHnzJiFJURTldFBCE8d/73ccIkmNXHP61GlexxUvWkyDxqQJEy0F9ZgBJTR18mS/48aOHqMMlCeOH/f7+xLFEgU+OIzc14MHD8TaNWsISIqiKDeBMhAsEAgT7jiADwDUHzd+3DjtuOvXrlkK6jELSkxlyqxTyoISKTiB1hsbN2goDh86LD58+EAIUhRFxRooka7gB5d/vMxwxwF8vsfpcxDr1KxlOqjHDCgzPmSIGlWq+h23bs1aZaCEEKATLHgof+48WjAPPOqtm7cIfDCgXXw6KYqiXApKTAUigtT3OESyhrsewKc/BtG0oSAkE9QjC0oAqU3LVn7HIGAmLS1NKSiPHjmiFRIwmgqCNtSrXVuMGjFCK/BAr5OiKMoFoAQgly5ZIooVKhxwze39+/chB3MAD+DTHzf3l1+8jnn69KlfoI/RoJ5AACuVWDxgqkuoHM5ZP/xgSx4lqvEgiMdMDiX6HFWR6GlSFEU5AJRmig4cOngo7AAO4PkeBzD6/h2mIc0E9agoOBAqiMcqKCGAbsvmzVq+pJGcTl9r3aKFePPmDWFJURTlFlAWKpAg9uzabSqIp13rNgGP27B+vamgHrOgzJElq+jUoYNAdKpZz9UoKPXCdCpKAKKAwJDB32h1X3Nlyx62vSOHDycoKYqinA7K4kWKapGhSIw3cp1AQTwo6Xbv3j0/u3L5igYv2aCeQACrVK68aNa4yScLVGcV6SnYtcNon6kCZTB4/nbuN61vgtWEzZsrl3j79i1hSVEUFS1QIm0BQTC+tmHderE3OVkg3UH2Or5BPGaKsIcL6jEazNOqeQtTkb6RAGWgDwzfdV0YApH49FIURUUJlDLQMKJAQTxmLFxQj1FQAvSIKvX9W0SX2gnKVStXih7dukmvMdatVcvvelZ2baEoiqIcBkrfIB6zhkjVUDt7yKSHILI1UIRsenq68mCeC3/8IRrUrffpb5ErarQU3fPU51qepW8hde5RSVEUFSOgDBTEgwLqgE04a9+mrVSupgwosRZYpWIlU9WFZEAJL9I33cWzOTOudeb06YApHyhvhx1HKpQt63csImb55FIURcUIKAMF8YwYNszQ+c+dPSsFCdmCA6dPnQq4nVW4VBcZUGKatUXTZqE3Zs6RU8vtRLARNpAGwH2DmfSBPDdu3CAoKYqiYgWUXTt19js/vCijx/sm6MM7C7Y1lZkSdkjL8D0GW2+9fvVaWWUeeIwo7ydTmSfYxs0nT5wkJCmKomIFlCgmkC1zZr/iATLnmDZlil/7pk+dqgyUSAtJLFzE77hhQ4YqLWEHwRMc8HW/oN5iqFqwqK2L9Uo+sRRFUREW8hYBHr2pSnW4eOGC37l379olde779+/7nQMJ+oH+9uyZM35/izaEu8bxlBS/47AVWLCNqANdB3tOGr0nBOIg1WbQgIGiVvUaXpszw+tEjiqmYIcPHabt8SmzITZFOVn/D15sGD0av7iDAAAAAElFTkSuQmCC"
        ></image>
      </defs>
      <style />
      <use id="logo" href="#img1" transform="matrix(.098 0 0 .098 -11 -4)" />
    </svg>
  );
};

export default Logo;
